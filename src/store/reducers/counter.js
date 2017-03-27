import { types } from '../actions/counter'

var defaultState = {
  number: 0
}

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case types.COUNT:
      return { number: state.number + 1 }
    default:
      return state
  }
}
