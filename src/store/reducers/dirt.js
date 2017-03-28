var defaultState = {
  locations: [],
  removed: 0
}

// Action for removing dirt
// First argument is coordinates
// second argument is bool, whether to increase the removed count
export const REMOVE_DIRT = ({ x, y }, count = true) => ({
  type: REMOVE_DIRT,
  x: parseInt(x, 10),
  y: parseInt(y, 10),
  count
})

export const ADD_DIRT = ({ x, y }) => ({
  type: ADD_DIRT,
  x: parseInt(x, 10),
  y: parseInt(y, 10)
})

// Find the index of a dirt with given coords in the locations array
const dirtIndex = (state, {x, y}) =>
  state.locations.findIndex(
    item => (item.x === x && item.y === y)
  )

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case ADD_DIRT:
      // Only add dirt if it's not duplicate
      if (dirtIndex(state, action) < 0) {
        return {
          locations: state.locations.concat({
            x: action.x,
            y: action.y
          }),
          removed: state.removed
        }
      } else {
        return state
      }
    case REMOVE_DIRT:
      // Find index to remove
      const ix = dirtIndex(state, action)
      if (ix > -1) {
        state = {
          locations: state.locations.slice(),
          removed: state.removed
        }
        state.locations.splice(ix, 1)
        // In setup stage we don't want to increase the removed count
        // whereas in play mode we do
        if (action.count) {
          state.removed++
        }
      }
      return state
    default:
      return state
  }
}
