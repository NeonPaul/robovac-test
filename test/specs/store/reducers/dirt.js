import test from '../../../tape'
import reducer, { REMOVE_DIRT } from '../../../../src/store/reducers/dirt'

test('REMOVE_DIRT removes targeted dirt', t => {
  var action = REMOVE_DIRT({ x: 1, y: 1 })
  var state = {
    locations: [{ x: 1, y: 1 }],
    removed: 0
  }

  t.deepEqual(
    reducer(state, action),
    {
      locations: [],
      removed: 1
    },
    'Dirt location is removed, remove count increases'
  )
  t.end()
})

test('REMOVE_DIRT does nothing if targeted dirt doesn\'t exist', t => {
  var action = REMOVE_DIRT({ x: 1, y: 1 })
  var state = {
    locations: [{ x: 2, y: 2 }],
    removed: 0
  }

  t.deepEqual(
    reducer(state, action),
    {
      locations: [{ x: 2, y: 2 }],
      removed: 0
    },
    'Dirt location remains, remove count is the same'
  )
  t.end()
})
