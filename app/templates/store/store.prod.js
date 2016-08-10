import { createStore } from 'redux'
import reducers from '../reducers'
import enhancer from '../middlewares/middleware.common'

export default function configureStore(initialState) {
  return createStore(reducers, initialState, enhancer)
}
