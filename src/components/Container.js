import React from 'react';
import GroceryList from './GroceryList';
import ShoppingCart from './ShoppingCart';

class Container extends React.Component {
    constructor() {
        super();
        this.state = {
            groceryItems: [
                { id: 1, title: 'Melk', amount: 1 },
                { id: 2, title: 'Eieren', amount: 1 },
                { id: 3, title: 'Avocado', amount: 1 },
                { id: 4, title: 'Nasi', amount: 1 },
            ],
            shoppingListItems: [
            ],
        };
        this.handleClickGroceryItem = this.handleClickGroceryItem.bind(this);
        this.emptyCart = this.emptyCart.bind(this);
        this.addItem = this.addItem.bind(this);
    }

    handleClickGroceryItem(item) {
        const winkelmand = this.state.shoppingListItems.map(obj => {
            if (obj.id === item.id) {
                obj.amount += 1;
                return obj;
            }
            return obj;
        });

        const duplicate = winkelmand.filter(obj => obj.id === item.id).length;
        if (!duplicate) { winkelmand.push(item); }

        this.setState({ shoppingListItems: winkelmand });
    }

    emptyCart() {
        this.setState({ shoppingListItems: [] });
    }

    addItem() {
        let userInput = document.getElementById('input-field').value;
        const itemId = this.state.groceryItems.length + 1;
        const newItem = { id: itemId, title: userInput, amount: 1 };

        this.setState(prevState => {
            const newArray = prevState.groceryItems.map(obj => obj);
            newArray.push(newItem);
            return ({ groceryItems: newArray });

        });

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