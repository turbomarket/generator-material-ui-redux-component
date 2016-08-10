import { combineReducers } from 'redux'
import <%= namecamel %> from './<%= name %>Reducer'

export default combineReducers({
  <%= namecamel %>,
})
