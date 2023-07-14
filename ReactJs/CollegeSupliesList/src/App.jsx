import { useState } from 'react'
import './App.css'
import Item from './components/Item/Item'
import ItemForm from './components/ItemForm/ItemForm'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Search from './components/Search/Search'
import Seed from './components/Seed/Seed'

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

  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [seed, setSeed] = useState("")
  const [password, setPassword] = useState("")

  const searchList = (seed) => {

  }

  const saveList = (seed, password) => {
    
  }

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
      <div className='seed'>
        <Seed 
          search={seed} setSearch={setSeed} 
          password={password} setPassword={setPassword}
          searchList={searchList}
          saveList={saveList}
        />
      </div>
      <div className='searchItems'>
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter}/>
      </div>
      <Header />
      <div className='supplies-list'>
        {items.filter((items) => 
            filter === "All" 
              ? true 
              : filter === "Completed" 
              ? items.isCompleted 
              : !items.isCompleted
          )
          .filter((items) => 
          items.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
          <Item key={item.id} item={item} checkItem={checkItem} removeItem={removeItem}/>
        ))}
      </div>
      <ItemForm addItem={addItem} />

    </div>
  )
}

export default App
