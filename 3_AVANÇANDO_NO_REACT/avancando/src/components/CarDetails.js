import React from 'react'

const CarDetails = (props) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>marca: {props.brand}</li>
            <li>KM: {props.km}</li>
            <li>Cor: {props.color}</li>
        </ul>
    </div>
  )
}

export default CarDetails