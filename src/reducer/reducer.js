import axios from 'axios';

const initialState = {
    user: {},
    album: {},
    selectedAlbum: {},
    albums: [],
    firstName: '',
    lastName: '',
    address: {},
    address_1: '',
    address_2: '',
    address_3: '',
    address_4: '',
    email: '',
    itemPrice: 0,
    itemsInCart: 0,
    albumArtwork: '',
    cartTotal: 0.00,
    cart: [],
    userCart: [],
    userOrder: [],
    allOrders: []
}


const GET_USER_INFO = "GET_USER_INFO";
const GET_ALBUMS = "GET_ALBUMS";
const ADD_TO_CART = "ADD_TO_CART";
const GET_ALBUM = "GET_ALBUM";
const ADD_ALBUM_TO_SHOP = "ADD_ALBUM_TO_SHOP";
const GET_CURRENT_USER = "GET_CURRENT_USER";
const DELETE_ALBUM = "DELETE_ALBUM";
const GET_ALBUM_EDIT_PAGE = "GET_ALBUM_EDIT_PAGE";
const UPDATE_ALBUM = "UPDATE_ALBUM";
const CALCULATE_CART_TOTAL = "CALCULATE_CART_TOTAL";
const UPDATE_ADDRESS = "UPDATE_ADDRESS";
const REMOVE_FROM_CART = "REMOVE_FROM_CART";
const CREATE_CART_AND_ORDER = "CREATE_CART_AND_ORDER";
const GET_ALL_ORDERS = "GET_ALL_ORDERS";
const CLEAR_CART = "CLEAR_CART";

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USER_INFO + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case GET_ALBUMS + '_FULFILLED':
            return Object.assign({}, state, { albums: action.payload })
        case ADD_TO_CART:
            console.log('reducer fired')
            state.cart.push(action.payload)
            console.log('state.cart', state.cart)
            return Object.assign({}, state, { cart: state.cart, itemsInCart: state.cart.length })
        case GET_ALBUM + '_FULFILLED':
            return Object.assign({}, state, { album: action.payload })
        case ADD_ALBUM_TO_SHOP + '_FULFILLED':
            return Object.assign({}, state, { albums: action.payload })
        case GET_CURRENT_USER + '_FULFILLED':
            return Object.assign({}, state, { user: action.payload })
        case DELETE_ALBUM:
            return Object.assign({}, state, { album: action.payload })
        case GET_ALBUM_EDIT_PAGE + '_FULFILLED':
            return Object.assign({}, state, { album: action.payload })
        case UPDATE_ALBUM + '_FULFILLED':
            return Object.assign({}, state, { album: action.payload })
        case CALCULATE_CART_TOTAL:
            return Object.assign({}, state, { cartTotal: action.payload })
        case UPDATE_ADDRESS:
            return Object.assign({}, state, { user: action.payload })
        case REMOVE_FROM_CART:
            let currentCart = state.cart.slice();
            currentCart.splice(currentCart.findIndex((album) => album.id === action.payload), 1)
            for (var i = 0, temporaryTotal = 0; i < currentCart.length; i++) {
                console.log(Number(currentCart[i].price))
                temporaryTotal += (Number(currentCart[i].price))
            }
            console.log(currentCart)
            return Object.assign({}, state, { cart: currentCart, cartTotal: temporaryTotal.toFixed(2), itemsInCart: state.cart.length - 1 })
        case CREATE_CART_AND_ORDER: 
            return Object.assign({}, state, { userOrder: action.payload })
        case GET_ALL_ORDERS + '_FULFILLED':
            return Object.assign({}, state, { allOrders: action.payload })
        case CLEAR_CART:
            return Object.assign({}, state, { itemsInCart: action.payload, cart: []})
        default:
            return state;
    }
}


export function getUserInfo() {
    const userData = axios.get('/auth/me')
        .then(res => {
            console.log(res.data)
            return res.data
        })
    return {
        type: GET_USER_INFO,
        payload: userData
    }
}

export function getAlbum() {
    const albumData = axios.get('/api/albums')
        .then(res => {
            return res.data
        })
    // console.log(albumData)
    return {
        type: GET_ALBUM,
        payload: albumData
    }
}

export function addAlbumToShop(reqBody) {
    const albumData = axios.post('/api/addalbum', reqBody)
        .then(res => {
            return res.data
        })
    return {
        type: ADD_ALBUM_TO_SHOP,
        payload: albumData
    }
}

export function clearCart(){
    return {
        type: CLEAR_CART,
        payload: 0
    }
}

export function addToCart(album) {
    console.log(album)
    return {
        type: ADD_TO_CART,
        payload: album
    }
}

export function removeFromCart(id) {
    console.log(id)
    return {
        type: REMOVE_FROM_CART,
        payload: id
    }
}

export function createCartAndOrder(albums){
    const orderInfo = axios.post('/api/order', {albums})
        .then(res => {
            console.log('this is the order data', res.data)
            return res.data
        })
    return {
        type: CREATE_CART_AND_ORDER,
        payload: orderInfo
    }
}

export function getOrders(){
    const allOrders = axios.get('/api/getorders')
        .then(res => {
            // console.log('orders', res.data)
            return res.data
        })
    return {
        type: GET_ALL_ORDERS,
        payload: allOrders
    }
}

export function getCurrentUser() {
    const currentUserData = axios.get('/api/currentUser')
        .then(res => {
            // console.log('current user = ', res.data)
            return res.data
        })
    return {
        type: GET_CURRENT_USER,
        payload: currentUserData
    }
}

export function deleteAlbum(id) {
    console.log('deleting album', id)
    const deletedAlbumData = axios.delete('/api/album/' + id)
        .then(res => {
            console.log('deleted album', res.data)
            return res.data
        })
    return {
        type: DELETE_ALBUM,
        payload: deletedAlbumData
    }
}

export function getAlbumEditPage(id) {
    console.log(id)
    const currentAlbum = axios.get('/api/album/' + id)
        .then(res => {
            console.log(res.data[0])
            return res.data[0]
        })
    return {
        type: GET_ALBUM_EDIT_PAGE,
        payload: currentAlbum
    }
}

export function updateShippingAddress(id, address_1, address_2, address_3, address_4) {
    console.log('updating shipping address in reducer')
    const updatedAddress = axios.put('/api/useraddress/' + id, {
        address_1: address_1,
        address_2: address_2,
        address_3: address_3,
        address_4: address_4
    })
        .then(res => {
            console.log('this is the returned updated address', res.data)
            return res.data
        })
    return {
        type: UPDATE_ADDRESS,
        payload: updatedAddress
    }
}


export function updateAlbum(id, album_title, album_artwork, vinyl_price, cd_price, release_year) {
    const updatedAlbum = axios.put('/api/album/' + id, {
        album_title: album_title,
        album_artwork: album_artwork,
        vinyl_price: vinyl_price,
        cd_price: cd_price,
        release_year: release_year,
    })
        .then(res => {
            console.log('this is the returned updated album', res.data)
            return res.data
        })
    return {
        type: UPDATE_ALBUM,
        payload: updatedAlbum
    }
}

export function calculateCartTotal(cart) {
    const newCart = cart;
    var i;
    var temporaryTotal = 0;
    for (i = 0; i < newCart.length; i++) {
        console.log(Number(newCart[i].price))
        temporaryTotal += (Number(newCart[i].price))
    }
    return {
        type: CALCULATE_CART_TOTAL,
        payload: (temporaryTotal).toFixed(2)
    }
}



