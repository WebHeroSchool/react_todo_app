import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


const props = {
  count: 10
};

const App = () => {

  const items = [
    {
      value: 'Постричься'
    },
    {
      value: 'Погладить вещи'
    },
    {
      value: 'Сделать уборку дома'
    }
  ];


  return (
  <div>
      <h1>Todos</h1>
      <InputItem />
      <ItemList items={items}/>
      <Footer count={props.count} />
  </div>);

}

export default App;