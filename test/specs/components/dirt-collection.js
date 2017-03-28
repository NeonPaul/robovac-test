import React from 'react'
import DirtCollection from '../../../src/components/dirt-collection'
import Dirt from '../../../src/components/dirt'
import test from '../../tape'

test('Dirt collection generates collection of dirt', t => {
  var dirt = DirtCollection({
    locations: [
      { x: 1, y: 2 },
      { x: 3, y: 4 }
    ]
  })

  t.jsxEquals(
    dirt,
    <g>
      <Dirt x={1} y={2} />
      <Dirt x={3} y={4} />
    </g>
  )
  t.end()
})
