import test from '../../tape'
import robotReducer, { SET_COORDS } from '../../../src/store/reducers/robot'

test('SET_COORDS action sets the coordinates of the robot', t => {
  var action = SET_COORDS({ x: 123, y: 456 })
  t.deepEqual(
    robotReducer(undefined, action),
    {
      x: 123,
      y: 456
    },
    'Reducer output equals inputted coords'
  )
  t.end()
})
