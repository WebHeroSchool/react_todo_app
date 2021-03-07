import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';
import styles from './App.module.css';

const props = {
  count: 10
};

const App = () => {

  const items = [
    {
      value: 'Постричься',
      isDone: true
    },
    {
      value: 'Погладить вещи',
      isDone: false
    },
    {
      value: 'Сделать уборку дома',
      isDone: true
    }
  ];


  return (
  <div className={styles.wrap}>
      <h1 className={styles.title}>Todos</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer count={props.count} />
  </div>);

}

export default App;