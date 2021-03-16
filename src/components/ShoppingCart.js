import React from 'react';
import List from './List'

function ShoppingCart(props) {

    return (<div className="shopping-cart">
        <h1 className="header cart-header">Cart</h1>
        <button className="btn remove-btn" onClick={props.removeItems} >empty cart</button>
        <List items={props.shopItems} /></div>)

}

export default ShoppingCart;