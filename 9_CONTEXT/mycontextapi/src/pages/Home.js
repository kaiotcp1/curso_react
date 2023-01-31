import React from 'react'
import ChangeCounter from '../components/ChangeCounter';

import { useCounterContext } from '../hooks/useCounterContext';

import { useTitleColorContext } from '../hooks/useTitleColorContext';

const Home = () => {
  const { counter } = useCounterContext();
  
  // context complexo
  const {color} = useTitleColorContext();

  return (
    <div>
      <h1 style={{ color: color}}>Home</h1>
      <p>Valor do contador: {counter}</p>
      <ChangeCounter />
    </div>
  )
}

export default Home