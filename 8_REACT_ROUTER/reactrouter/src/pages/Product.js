import React from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
    // Rota dinâmica
    const {id} = useParams()

  return (
    <div>
        <p>ID do produto: {id}</p>
    </div>
  )
}

export default Product