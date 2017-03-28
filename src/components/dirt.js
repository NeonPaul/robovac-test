import React from 'react'

const Dirt = ({ x, y }) => (
  // Invert the y-axis as we want to measure from bottom
  // but browser measures from top
  <rect x={x} y={-y} height='1' width='1' fill='brown' />
)

export default Dirt
