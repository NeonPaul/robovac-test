import React from 'react'
import Room, { roomStyle } from '../../../src/components/room'
import test from '../../tape'

test('Room component generates svg box', t => {
  var room = Room({ rows: 10, cols: 5, children: <div /> })
  t.jsxEquals(
    room,
    <svg viewBox={[0, -9, 5, 10]}
      preserveAspectRatio='none'
      style={roomStyle}>
      <div />
    </svg>
  )
  t.end()
})
