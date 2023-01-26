import React from 'react'
import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'


const Product = () => {
    // Rota dinâmica
    const {id} = useParams()

    // Carregamento dado individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url);

  return (
    <div>
        <p>ID do produto: {id}</p>
        {error & <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando...</p>}
        {product && (
            <div> 
                <h1>{product.name}</h1>
                <p>R$: {product.price}</p>
            </div>
        )}
    </div>
  )
}

export default Product