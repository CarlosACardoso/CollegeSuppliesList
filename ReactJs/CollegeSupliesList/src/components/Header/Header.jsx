import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className='headerDetails'>
          <p className='headerImage'>Imagem</p>
          <p className='headerName'>Nome</p>
          <p className='headerBrand'>Marca</p>
          <p className='headerQuant'>Quantidade</p>
          <p className='headerOptional'>Optional</p>
        </div>
        <div className='headerSpaceButtons'>Funções</div>
    </div>
  )
}

export default Header