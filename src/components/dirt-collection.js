import React from 'react'
import Dirt from './dirt'

// Dennis, there's some lovely filth down 'ere
const DirtCollection = ({ locations }) => (
  <g>
    {
    locations.map(({ x, y }) =>
      <Dirt x={x} y={y} key={x + ',' + y} />
    )
  }
  </g>
)

export default DirtCollection
