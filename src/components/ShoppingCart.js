import React from 'react';
import List from './List'

function ShoppingCart(props) {

    return (<div className="cart">
        <h1 className="cart__header">Cart</h1>
        <button className="cart__btn" onClick={props.removeItems} >empty cart</button>
        <List items={props.shopItems} /></div>)

}

export default ShoppingCart;