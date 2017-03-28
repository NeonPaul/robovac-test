import React from 'react'

// Robot and its position in the room
// Props: {x,y} coordinates of robot relative to bottom left
const Robot = ({ x, y }) => (
  <rect x={x} y={-y} height='1' width='1' fill='black' />
)

export default Robot
