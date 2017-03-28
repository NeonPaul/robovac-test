import Setup from '../components/setup'
import { SET_ROWS, SET_COLS } from '../store/reducers/room'
import { ADD_DIRT, REMOVE_DIRT } from '../store/reducers/dirt'
import { SET_COORDS } from '../store/reducers/robot'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  rows: state.room.rows,
  cols: state.room.cols,
  dirtLocations: state.dirt.locations,
  robot: state.robot
})

const mapDispatchToProps = dispatch => ({
  setRows: n => dispatch(SET_ROWS(n)),
  setCols: n => dispatch(SET_COLS(n)),
  addDirt: coörds => dispatch(ADD_DIRT(coörds)),
  removeDirt: coörds => dispatch(REMOVE_DIRT(coörds, false)),
  setStart: coörds => dispatch(SET_COORDS(coörds))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)
