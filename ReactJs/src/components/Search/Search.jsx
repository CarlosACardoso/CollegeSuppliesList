import React from 'react'
import './Search.css'

const Search = ({ search, setSearch }) => {
    return (
        <div className="search">
            <input 
                type="text" 
                value={search} 
                onChange={(e) => setSearch(e.target.value)} 
                placeholder="Digite para pesquisar itens na lista" 
            />
        </div>
    )
}

export default Search