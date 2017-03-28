import { SET_COORDS } from '../reducers/robot'
import { REMOVE_DIRT } from '../reducers/dirt'

// These functions translate the position of the robot in the room
const NORTH = ({ x, y }) => ({ x, y: y + 1 })
const SOUTH = ({ x, y }) => ({ x, y: y - 1 })
const EAST = ({ x, y }) => ({ x: x + 1, y })
const WEST = ({ x, y }) => ({ x: x - 1, y })

// Returns a thunk that changes the robot coords
// if the given translation is valid (i.e. not blocked by walls)
const move = translate =>
  (dispatch, getState) => {
    const { room, robot } = getState()

    // These are the translated coords:
    const { x, y } = translate(robot)

    // Make sure new coords are within the room boundry
    if (x < room.cols && x >= 0 && y < room.rows && y >= 0) {
      dispatch(SET_COORDS({ x, y }))
      dispatch(REMOVE_DIRT({ x, y }))
    }
  }

export const navNorth = () => move(NORTH)
export const navSouth = () => move(SOUTH)
export const navEast = () => move(EAST)
export const navWest = () => move(WEST)
