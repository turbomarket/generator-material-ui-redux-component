import { connect } from 'react-redux'
import <%= name %> from '../components/<%= name %>.jsx'
import { /* TODO: import action creators here */ } from '../actions/<%= name %>Actions'

export default connect(
  state => ({
    // TODO: map props to state here
  }),
  dispatch => ({
    // TODO: map props to actions here
  })
)(<%= name %>)
