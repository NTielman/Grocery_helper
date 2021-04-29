import React from 'react';
import ListItem from './ListItem'

function List(props) {

    const listItems = props.items.map(item => {
        return (<ListItem
            key={item.id}
            item={item}
            handleClick={props.handleClick} />)
    })

    return (<ul className="list">
        {listItems}
    </ul>)

}

export default List;