import { useState } from 'react'
import './App.css'
import Item from './components/Item/Item';
import ItemForm from './components/ItemForm/ItemForm';
import Header from './components/Header/Header';

function App() {
  const [items, setItems] = useState([
    {
      id: 1,
      imageURL: 'https://lh3.googleusercontent.com/u/0/d/1x4xKKY3gigN6HxQ0EIt8QkXP5c9rG5nI=w1360-h625-iv1',
      name: "Espelho Goldran n5",
      brand: "Dental Especial",
      quantity: 1,
      optional: "Necessário",
      isCompleted: false,
    },
    {
      id: 2,
      imageURL: 'https://lh3.googleusercontent.com/u/0/d/1VBouV-an0Tn1-4-YmePFF_YBsaIfZ94W=w805-h625-iv1',
      name: "Resina Z100 - 3M",
      brand: "Dental Alto Astral",
      quantity: 4,
      optional: "Necessário",
      isCompleted: false,
    },
    {
      id: 3,
      imageURL: 'https://cdn.dentalspeed.com/produtos/luva-cirurgica-esteril-6-5-supermax-5760b-1.jpg',
      name: "Luva Cirúrgica mega legalaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaa aaaaaaaaaaaaa",
      brand: "Dental Fundamental",
      quantity: 1,
      optional: "Opcional",
      isCompleted: true,
    }
  ]);

  const addItem = (imageURL, name, brand, quantity, optional) => {
    const newItems = [
      ...items, 
      {
        id: Math.floor(Math.random() * 1000000),
        imageURL,
        name,
        brand,
        quantity,
        optional,
        isCompleted: false,
      },
    ];
    setItems(newItems);
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
      <ItemForm addItem={addItem}/>
      <Header />
      <div className='supplies-list'>
        {items.map((item) => (
          <Item key={item.id} item={item} checkItem={checkItem}/>
        ))}
      </div>
      
    </div>
  )
}

export default App
