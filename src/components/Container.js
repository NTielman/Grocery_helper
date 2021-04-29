import React from 'react';
import GroceryList from './GroceryList';
import ShoppingCart from './ShoppingCart';

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [],
            shoppingListItems: [],
        };
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleClickGroceryItem(item) {
        this.setState(prevState => {
            const cart = prevState.shoppingListItems.map(obj => {
                if (obj.id === item.id) {
                    return { ...obj, amount: obj.amount + 1 };
                }
                return obj;
            });
            const itemInCart = cart.filter(obj => obj.id === item.id).length;
            if (!itemInCart) { cart.push(item); }
            return ({ shoppingListItems: cart });
        });
    }

    emptyCart() {
        this.setState({ shoppingListItems: [] });
    }

    addItem(e) {
        e.preventDefault();
        let userInput = document.getElementById('input-field').value;
        if (userInput) {
            const itemId = this.state.groceryItems.length + 1;
            const newItem = { id: itemId, title: userInput, amount: 1 };

            this.setState(prevState => {
                const newArray = prevState.groceryItems.map(obj => obj);
                newArray.push(newItem);
                return ({ groceryItems: newArray });

            });
        }
        document.getElementById('input-field').value = '';
    }

    render() {

        return (<div className="container">
            <GroceryList
                addItem={this.addItem}
                groceryItems={this.state.groceryItems}
                handleClick={this.handleClickGroceryItem} />
            <ShoppingCart
                shopItems={this.state.shoppingListItems}
                removeItems={this.emptyCart} />
        </div>)
    }
}

export default Container;