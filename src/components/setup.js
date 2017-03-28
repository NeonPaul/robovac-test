import React from 'react'

// Fetch the input value from the event and pass it to a function
const inputChange = fn =>
  e => fn(e.target.value)

const Setup = ({ rows, cols, setRows, setCols }) => (
  <div>
    Rows <input type='number' value={rows} onChange={inputChange(setRows)} /><br />
    Cols <input type='number' value={cols} onChange={inputChange(setCols)} /><br />
  </div>
)

export default Setup
