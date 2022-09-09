import React, { useEffect, useState } from 'react';
import React from 'react';
import { products } from '../data/products';
import ItemList from '../components/ItemList';

const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([])

    useEffect(() => {

        (async () => {
            const obtenerProductos = new Promise((accept, reject) => {
                setTimeout(() => {
                    accept(products)
                }, 3000);
            })

          
            try {
                const productos = await obtenerProductos;
                setProductos(productos);
            } catch (error) {
                console.log(error);
            }

        })()

    }, [])

    console.log(productos)

    return (
        <div className='item-list-container'>
            <ItemList products={productos} />
        </div>
    )
}

export default ItemListContainer;