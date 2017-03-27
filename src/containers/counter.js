import Counter from '../components/counter'
import { count } from '../store/actions/counter'
import { connect } from 'react-redux'

const mapStateToProps = state => state.counter

const mapDispatchToProps = dispatch => ({
  count: () => dispatch(count())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
