import { combineReducers } from 'redux'
import room from './room'
import robot from './robot'
import dirt from './dirt'

export default combineReducers({
  room,
  robot,
  dirt
})
