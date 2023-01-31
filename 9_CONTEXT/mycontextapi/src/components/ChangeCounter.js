import React from 'react'
import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'

const ChangeCounter = () => {
  const {counter, setCounter} = useContext(CounterContext);
  
  
    return (
    <div>
        <h1>ChangeCounter</h1>
        <button onClick={() => setCounter(counter + 1)}> Add value to counter</button>
    </div>
  )
}

export default ChangeCounter