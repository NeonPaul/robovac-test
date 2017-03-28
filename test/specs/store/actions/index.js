import proxyquire from 'proxyquire'
import sinon from 'sinon'

import test from '../../../tape'

const SET_COORDS = sinon.spy()

const actions = proxyquire(
  '../../../../src/store/actions',
  {
    '../reducers/robot': {
      SET_COORDS
    }
  }
)

function testCase (text, action, canMoveState, expectedEndState, cantMoveState) {
  test(text, t => {
    const navAction = actions[action]()
    const dispatch = sinon.spy()
    const state = {
      room: {
        rows: 2,
        cols: 2
      },
      robot: canMoveState
    }

    const getState = sinon.stub()
    getState.returns(state)

    navAction(dispatch, getState)
    t.deepEqual(SET_COORDS.lastCall.args, [expectedEndState], 'SET_COORDS dispatched with ' + JSON.stringify(expectedEndState))

    SET_COORDS.reset()

    state.robot = cantMoveState
    navAction(dispatch, () => state)
    t.false(SET_COORDS.called, 'SET_COORDS not dispatched when blocked')

    t.end()
  })
}

testCase(
  'navNorth moves robot north unless blocked',
  'navNorth',
  { x: 0, y: 0 },
  { x: 0, y: 1 },
  { x: 0, y: 1 }
)

testCase(
  'navsoutn moves robot south unless blocked',
  'navSouth',
  { x: 0, y: 1 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
)

testCase(
  'navEast moves robot east unless blocked',
  'navEast',
  { x: 0, y: 0 },
  { x: 1, y: 0 },
  { x: 1, y: 0 }
)

testCase(
  'navWest moves robot west unless blocked',
  'navWest',
  { x: 1, y: 0 },
  { x: 0, y: 0 },
  { x: 0, y: 0 }
)
