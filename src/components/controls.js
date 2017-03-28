import React from 'react'

const Controls = ({ navNorth, navSouth, navEast, navWest }) => (
  <div style={{ textAlign: 'center', width: '200px' }}>
    <button onClick={navNorth}>⬆️</button><br />
    <button onClick={navWest}>⬅️</button>
    <button onClick={navSouth}>⬇️</button>
    <button onClick={navEast}>➡️</button>
  </div>
)

export default Controls
