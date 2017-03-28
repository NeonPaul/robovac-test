import DirtCollection from '../components/dirt-collection'
import { connect } from 'react-redux'

const mapStateToProps = state => state.dirt

const mapDispatchToProps = dispatch => ({
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirtCollection)
