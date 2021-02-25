import React from 'react';
import Item from '../Item/Item';

const ItemList = ({ todoItem }) =>(<ul>
    <li><Item todoItem={todoItem.item1} /></li>
    <li><Item todoItem={todoItem.item2} /></li>
    <li><Item todoItem={todoItem.item3} /></li>
</ul>);

export default ItemList;