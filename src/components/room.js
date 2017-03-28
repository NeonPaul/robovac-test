import React from 'react'

export const roomStyle = {
  border: '1px solid black',
  maxHeight: '90vh'
}

const Room = ({ rows, cols, children }) => (
  <svg viewBox={[0, 1 - rows, cols, rows]}
    preserveAspectRatio='none'
    style={roomStyle}>
    { children }
  </svg>
)

export default Room
