import { createStore } from 'redux'
import rootReducer from '../reducers'
import enhancer from '../middlewares/middleware.dev.js'

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(rootReducer, initialState, enhancer)

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../reducers', (reducers) =>
      // default if you use Babel 6+
      store.replaceReducer(reducers)
    )
  }

  return store
}
