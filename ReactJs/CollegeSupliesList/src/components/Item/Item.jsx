import React from 'react'
import './Item.css'

const Item = ({ item, checkItem }) => {
  return (
    <div className='item'>
          <div className='itemDetails'
            style={{textDecoration: item.isCompleted ? "line-through" : ""}}
          >
            <img src={item.imageURL} alt={item.name} style={{ opacity: item.isCompleted ? 0.5 : 1 }}/>
            <p className ='itemName'>{item.name}</p>
            <p className ='itemBrand'>{item.brand}</p>
            <p className ='itemQuant'>{item.quantity}</p>
            <p className ='itemOptional'>{item.optional}</p>
          </div>
          <div className='itemButtons'>
            <button 
              className='checkBtn' 
              onClick={() => checkItem(item.id)}>{item.isCompleted ? "Desmarcar" : "Marcar"}
            </button>
            <button className='removeBtn' >Excluir</button>
          </div>
    </div>
  )
}

export default Item