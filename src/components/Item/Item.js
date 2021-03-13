import React from 'react';
import classnames from 'classnames';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

const Item = ({ value, isDone, onClickDone }) => (<span>
    <Checkbox
            defaultChecked
            color="primary"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
            onClickDone={()=>onClickDone(isDone)}
          />
    { value}
    <DeleteOutlinedIcon className={styles.icon} />
</span>);

export default Item;
