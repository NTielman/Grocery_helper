import React from 'react';

function ListItem(props) {
    const showAmount = props.handleClick ? null : `hoeveelheid: ${props.item.amount}`

    return (<li
        key={props.item.id}
        className="list-item"
        value={props.item.title}
        onClick={() => props.handleClick ? props.handleClick(props.item) : null}
    >{props.item.title} {showAmount}</li>)
}

export default ListItem;