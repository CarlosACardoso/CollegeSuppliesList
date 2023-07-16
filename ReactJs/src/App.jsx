import { useState } from 'react'
import './App.css'
import Item from './components/Item/Item'
import ItemForm from './components/ItemForm/ItemForm'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
import Search from './components/Search/Search'
import Seed from './components/Seed/Seed'

function App() {
  const [items, setItems] = useState([])
  const [responseSave, setResponseSave] = useState()
  const [filter, setFilter] = useState("All")
  const [search, setSearch] = useState("")
  const [seed, setSeed] = useState("")
  const [password, setPassword] = useState("")

  const searchList = async () => {
    try {
      const response = await fetch(`http://localhost:3000/suppliesList?nameList=${seed}`);
      const jsonData = await response.json();
      setItems(jsonData);
    } catch (error) {
      console.log('Ocorreu um erro ao fazer a requisição:', error);
    }

  };

  const saveList = async () => {
    const data = {
      listName: seed,
      listPassword: password,
      listItems: items
    };

    const response = await fetch(`http://localhost:3000/saveList`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' 
      },
      body: JSON.stringify(data)
    })
    let responseBody = await response.text();
    setResponseSave(responseBody)
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
          seed={seed} setSeed={setSeed} 
          password={password} setPassword={setPassword}
          searchList={searchList}
          saveList={saveList}
          responseSave={responseSave}
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