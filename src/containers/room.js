import Room from '../components/room'
import { connect } from 'react-redux'

const mapStateToProps = state => state.room

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Room)
