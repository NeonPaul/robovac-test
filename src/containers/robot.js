import Robot from '../components/robot'
import { connect } from 'react-redux'

const mapStateToProps = state => state.robot

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Robot)
