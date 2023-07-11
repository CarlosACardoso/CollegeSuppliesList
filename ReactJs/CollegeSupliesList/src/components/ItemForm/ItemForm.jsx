import { useState } from 'react'
import './ItemForm.css'

const ItemForm = ({ addItem }) => {
    const [imageURL, setImageURL] = useState("")
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuantity] = useState("")
    const [optional, setOptional] = useState("")



    const handleSubmit = (e) => {
        e.preventDefault();
        if(!imageURL || !name || !quantity || !optional) return;
        addItem(imageURL, name, brand, quantity, optional);
        setImageURL("");
        setName("");
        setBrand("");
        setQuantity("");
        setOptional("");
    };
  return (
        <div>
            <h2>Novo item:</h2>
            <form 
                className="item-form"
                onSubmit={handleSubmit}
            >
                <div className='itemDetailsForm'>
                    <input 
                        type='text'
                        placeholder="Digite a url da imagem" 
                        value={imageURL}
                        onChange={(e) => setImageURL(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Digite o nome do item" 
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Digite a marca do item" 
                        value={brand}
                        onChange={(e) => setBrand(e.target.value)}
                    />
                    <input type="number"    
                        placeholder="Quantidade" 
                        value={quantity}
                        step="1"
                        onChange={(e) => setQuantity(e.target.value)}
                    />
                    <select value={optional} 
                        onChange={(e) => setOptional(e.target.value)}>
                        <option value="">Opcional?</option>
                        <option value="Opcional">Opcional</option>
                        <option value="Necessario">Necessário</option>
                    </select>
                </div>
                <button 
                    className='itemAddButton'
                    type="submit"
                >
                    Adicionar item
                </button>
            </form>
        </div>
  )
}

export default ItemForm