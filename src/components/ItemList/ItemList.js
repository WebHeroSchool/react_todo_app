import React from 'react';
import Item from '../Item/Item';
import styles from './ItemList.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const ItemList = ({ items }) => (<ul classsName={styles.item_list}>
    {items.map( item => <li key={item.value} className={styles.item}>
      <div>
          <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
          <Item value={item.value} isDone={item.isDone} />
      </div>
      <DeleteOutlinedIcon className={styles.icon} />
    </li>)}
</ul>);

export default ItemList;