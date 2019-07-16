import React, { Component } from 'react';
import GravityDomeHeader from '../GravityDomeHeader/GravityDomeHeader.js'
import './Cart.css';

class Cart extends Component {

    render(){
        return (
            <div className="cart-root">
              <GravityDomeHeader />
              <div className="cart-title">
                Cart
              </div>
            </div>
        )
    }
}

export default Cart