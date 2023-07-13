import { useState } from 'react'
import './App.css'
import Item from './components/Item/Item';
import ItemForm from './components/ItemForm/ItemForm';
import Header from './components/Header/Header';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      image: '',
      name: "Espelho Goldran n5",
      brand: "Dental Especial",
      quantity: 1,
      optional: "Necessário",
      isCompleted: false,
    },
    {
      id: 2,
      image: '',
      name: "Resina Z100 - 3M",
      brand: "Dental Alto Astral",
      quantity: 4,
      optional: "Necessário",
      isCompleted: false,
    },
    {
      id: 3,
      image: '',
      name: "Luva Cirúrgica mega legalaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
      brand: "Dental Fundamental",
      quantity: 1,
      optional: "Opcional",
      isCompleted: true,
    }
  ]);

  const addItem = (image, name, brand, quantity, optional) => {
    const newItems = [
      ...items, 
      {
        id: Math.floor(Math.random() * 1000000),
        image: image,
        name: name,
        brand: brand,
        quantity: quantity,
        optional: optional,
        isCompleted: false,
      },
    ];
    setItems(newItems);
  }

  const removeItem = (id) =>{
    const newItems = [...items];
    const filteredItems = newItems.filter(
      item => item.id !== id ? item : null
      );
      setItems(filteredItems);
  }

  const checkItem = (id) => {
    const newItems = [...items]
    newItems.map(
      (item) => item.id === id ? item.isCompleted = !item.isCompleted : item
      );
    setItems(newItems);
  }


  return (
    <div className="App">
      <h1>Lista de Materais</h1>
      <ItemForm addItem={addItem} />
      <Header />
      <div className='supplies-list'>
        {items.map((item) => (
          <Item key={item.id} item={item} checkItem={checkItem} removeItem={removeItem}/>
        ))}
      </div>

    </div>
  )
}

export default App
