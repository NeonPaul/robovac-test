var defaultState = {
  locations: [
    { x: 1, y: 0 },
    { x: 0, y: 2 },
    { x: 4, y: 4 }
  ],
  removed: 0
}

export const REMOVE_DIRT = ({ x, y }) => ({
  type: REMOVE_DIRT,
  x,
  y
})

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case REMOVE_DIRT:
      const ix = state.locations.findIndex(
        item => (item.x === action.x && item.y === action.y)
      )
      if (ix > -1) {
        state = {
          locations: state.locations.slice(),
          removed: state.removed + 1
        }
        state.locations.splice(ix, 1)
      }
      return state
    default:
      return state
  }
}
