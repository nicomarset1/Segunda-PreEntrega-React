/*import Cards from '../Cards/Cards'
import './ItemListContainer.css'
import products from '../../assets/products/products.js'

const ItemListContainer = (prop) => {
    return(
        <div>
            <h2>{prop.title}</h2>
            <div className='products'>
                <Cards title={products[0].title} img={products[0].img} desc={products[0].desc} price={products[0].price} />
                <Cards title={products[1].title} img={products[1].img} desc={products[1].desc} price={products[1].price} />
                <Cards title={products[2].title} img={products[2].img} desc={products[2].desc} price={products[2].price} />
                <Cards title={products[3].title} img={products[3].img} desc={products[3].desc} price={products[3].price} />
                <Cards title={products[4].title} img={products[4].img} desc={products[4].desc} price={products[4].price} />
                <Cards title={products[5].title} img={products[5].img} desc={products[5].desc} price={products[5].price} />
                <Cards title={products[6].title} img={products[6].img} desc={products[6].desc} price={products[6].price} />
                <Cards title={products[7].title} img={products[7].img} desc={products[7].desc} price={products[7].price} />
                <Cards title={products[8].title} img={products[8].img} desc={products[8].desc} price={products[8].price} />
                <Cards title={products[9].title} img={products[9].img} desc={products[9].desc} price={products[9].price} />
            </div>
        </div>
    )
}

export default ItemListContainer
*/

import './ItemListContainer.css'
import { useState } from 'react'
import { useEffect } from 'react'
import Item from '../Item/Item';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {

    const [productos, setProductos] = useState([]);
    const [titulo, setTitulo] = useState('Todos los productos')
    const {categoryName} = useParams()

    const url = categoryName ? `https://fakestoreapi.com/products/category/${categoryName}` : `https://fakestoreapi.com/products/`

    useEffect(() => {
        fetch(url)
            .then(res=> res.json())
            .then(json=>{
                setProductos(json)
                categoryName ? setTitulo(categoryName) : setTitulo('Todos los productos')
            })
            .catch(error => console.error(error))
    },[categoryName])

    const toCapital = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1)
    }


    return(
        <div>
            <h2>{toCapital(titulo)}</h2>
            <div className='products'>
            
            {productos.length > 0 ? (
                <>
                {productos.map(product => <Item product={product} key={product.id}/>)}  
                </>) : (
                    <span className="loader"></span>
                )}
            </div>
        </div>
    )
}

export default ItemListContainer