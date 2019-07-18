                      require('dotenv').config();
const express       = require('express');
const session       = require('express-session');
const bodyParser    = require('body-parser');
const massive       = require('massive');
const passport      = require('passport');
const Auth0Strategy = require('passport-auth0');
const cors          = require('cors');
const dotenv        = require('dotenv');


const app = express();

app.use( express.static( `${__dirname}/../build` ) );

app.use(bodyParser.json());
app.use(cors());

app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}))

app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then(db => {
    console.log('massive database connected using connection string')
    app.set('db', db)
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
}, (accessToken, refreshToken, extraParams, profile, done) => {
    const db = app.get('db')
    db.find_user([profile.identities[0].user_id]).then(user => {
        // console.log(profile._json)
        if (user[0]) {
            // console.log('logged in', user[0])
            return done(null, user[0].id)
        } else {
            const user = profile._json;
            // console.log('this is the google user', user)
            const tempString = user.name.split(' ');
            const firstName = tempString[0];
            const lastName = tempString[1];
            db.create_user([firstName, lastName, user.identities[0].user_id, profile._json.picture])
                .then(user => {
                    console.log('new user', user);
                    return done(null, user[0].id)
                })
        }
    })
}))

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.REACT_APP_BASE_URL_2,
    failureRedirect: '/auth'
}))

app.get('/auth/me', (req, res) => {
    if (!req.user) {
        return res.status(200).send('User not found.')
    }
    return res.status(200).send(req.user);
})

app.get('/auth/logout', (req, res) => {
    req.logOut();
    res.redirect(302, `https://blairwoodward57.auth0.com/v2/logout?returnTo=${process.env.REACT_APP_BASE_URL_2}`)
})

passport.serializeUser((id, done) => {

    done(null, id);
})

passport.deserializeUser((id, done) => {
    app.get('db').find_current_user([id])
        .then(user => {
            done(null, user[0])
        })
})

const port = 3006
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})