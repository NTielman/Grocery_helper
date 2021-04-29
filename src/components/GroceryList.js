import React from 'react';
import List from './List';
import InputField from './InputField';

function GroceryList(props) {

    return (<div className="grocery-list">
        <h1 className="grocery-list__header">Grocery List</h1>
        <InputField addItem={props.addItem} />
        <List
            items={props.groceryItems}
            handleClick={props.handleClick} /></div>)

}

export default GroceryList;