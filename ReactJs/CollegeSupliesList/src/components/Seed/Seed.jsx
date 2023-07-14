import React from 'react'
import './Seed.css'

const Seed = ({ seed, setSeed, password, setPassword, searchList, saveList }) => {
  return (
    <div className="seed">
        <input className='seedList'
            type="text" 
            placeholder="Digite o id da Lista" 
            value={seed}
            onChange={(e) => setSeed(e.target.value)}
        />
        <button className='seedBtn' onClick={searchList}>Buscar Lista</button>
        <input className='passwordList'
            type="text" 
            placeholder="Digite a senha da Lista" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        <button className='saveBtn' onClick={saveList}>Salvar Lista</button>

        
    </div>
  )
}

export default Seed