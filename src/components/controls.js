import React from 'react'

const Controls = ({
  navNorth, navSouth, navEast, navWest,
  removed, remaining
}) => (
  <div style={{ textAlign: 'center', width: '200px' }}>
    <button onClick={navNorth}>⬆️</button><br />
    <button onClick={navWest}>⬅️</button>
    <button onClick={navSouth}>⬇️</button>
    <button onClick={navEast}>➡️</button>
    <div>
      { removed } removed<br />
      { remaining } remaining
    </div>
  </div>
)

export default Controls
