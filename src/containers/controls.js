import Controls from '../components/controls'
import { connect } from 'react-redux'
import { navNorth, navSouth, navEast, navWest } from '../store/actions'

const mapStateToProps = state => ({})

const mapDispatchToProps = dispatch => ({
  navNorth: () => dispatch(navNorth()),
  navSouth: () => dispatch(navSouth()),
  navEast: () => dispatch(navEast()),
  navWest: () => dispatch(navWest())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Controls)
