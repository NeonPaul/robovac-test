var defaultState = {
  locations: [],
  removed: 0
}

export const REMOVE_DIRT = ({ x, y }, count = true) => ({
  type: REMOVE_DIRT,
  x,
  y,
  count
})

export const ADD_DIRT = ({ x, y }) => ({
  type: ADD_DIRT,
  x,
  y
})

const dirtIndex = (state, {x, y}) =>
  state.locations.findIndex(
    item => (item.x === x && item.y === y)
  )

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case ADD_DIRT:
      if (dirtIndex(state, action) < 0) {
        return {
          locations: state.locations.concat({
            x: parseInt(action.x, 10),
            y: parseInt(action.y, 10)
          }),
          removed: state.removed
        }
      } else {
        return state
      }
    case REMOVE_DIRT:
      const ix = dirtIndex(state, action)
      if (ix > -1) {
        state = {
          locations: state.locations.slice(),
          removed: state.removed
        }
        state.locations.splice(ix, 1)
        if (action.count) {
          state.removed++
        }
      }
      return state
    default:
      return state
  }
}
