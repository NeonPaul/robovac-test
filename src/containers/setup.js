import Setup from '../components/setup'
import { SET_ROWS, SET_COLS } from '../store/reducers/room'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
  rows: state.room.rows,
  cols: state.room.cols
})

const mapDispatchToProps = dispatch => ({
  setRows: n => dispatch(SET_ROWS(n)),
  setCols: n => dispatch(SET_COLS(n))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Setup)
