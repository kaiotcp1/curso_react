import React from 'react'
import { useTitleColorContext } from '../hooks/useTitleColorContext';

const About = () => {
  // context complexo
  const {color} = useTitleColorContext();
  
  return (
    <div>
      <h1 style={{color: color}}>About</h1>
    </div>
  )
}

export default About