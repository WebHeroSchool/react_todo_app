import React from 'react';
import InputItem from '../InputItem/InputItem';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/Footer';


const props = {
  count: 10,

  todoItem: {
    item1: 'Постричься',
    item2: 'Покрасить волосы',
    item3: 'Сделать уборку дома'
  }
};

const App = () => (<div>
  <h1>Todos</h1>
  <InputItem />
  <ItemList todoItem={props.todoItem}/>
  <Footer count={props.count} />
</div>);

export default App;