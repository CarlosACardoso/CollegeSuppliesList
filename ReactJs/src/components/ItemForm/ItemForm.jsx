import { useState } from 'react'
import './ItemForm.css'

const ItemForm = ({ addItem }) => {
    const [image, setImage] = useState('');
    const [name, setName] = useState("")
    const [brand, setBrand] = useState("")
    const [quantity, setQuantity] = useState("")
    const [optional, setOptional] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!image || !name || !quantity || !optional) return;
        console.log(image)
        addItem(image, name, brand, quantity, optional);
        setImage("");
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
                <div className="image-input">
                    <label htmlFor="image">Escolha uma imagem para o item</label>
                    <input type='file' name='image' 
                        onChange={(e) => setImage(e.target.files[0])}/>
                </div>
                <div className='itemDetailsForm'>
                    
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
                        onChange={(e) =>{
                            const inputValue = e.target.value;
                            if (inputValue >= 0) {
                                setQuantity(inputValue);
                            }
                        }}
                    />
                    <select value={optional} 
                        onChange={(e) => setOptional(e.target.value)}>
                        <option value="">Opcional?</option>
                        <option value="Opcional">Opcional</option>
                        <option value="Necessario">Necessário</option>
                    </select>
                </div>
                <button className='itemAddButton' type="submit">
                    Adicionar item
                </button>
            </form>
        </div>
  )
}

export default ItemForm