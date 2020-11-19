import React from 'react';
import ListItem from './ListItem'

function List(props) {

    const groceryList = props.items.map(item => {
        return (<ListItem
            key={item.id}
            item={item}
            handleClick={props.handleClick} />)
    })

    return (<ul>
        {groceryList}
    </ul>)

}

export default List;