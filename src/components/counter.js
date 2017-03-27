import React from 'react'

const Counter = ({ number, count }) => (
  <div>
    Hi world<br />
    { number }<br />
    <button onClick={ count }>+</button>    
  </div>
)

export default Counter
