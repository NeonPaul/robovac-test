// Contains the robot's default x,y position in the room
// Origin is bottom left of room
var defaultState = {
  x: 0,
  y: 0
}

export const SET_COORDS = ({ x, y }) => ({
  type: SET_COORDS,
  x,
  y
})

export default function reduce (state = defaultState, action) {
  switch (action.type) {
    case SET_COORDS:
      return {
        x: action.x === undefined ? state.x : parseInt(action.x, 10),
        y: action.y === undefined ? state.y : parseInt(action.y, 10)
      }
    default:
      return state
  }
}
