import { compose } from 'redux'
import DevTools from '../components/DevTools.jsx'
import { persistState } from 'redux-devtools'
import commonMiddlewares from './middleware.common'

function getDebugSessionKey() {
  // You can write custom logic here!
  // By default we try to read the key from ?debug_session=<key> in
  // the address bar
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/)
  return (matches && matches.length > 0) ? matches[1] : null
}

const enhancer = compose(
  commonMiddlewares,
  // Required! Enable Redux DevTools with the monitors you chose
  DevTools.instrument(),
  // Optional. Lets you write ?debug_session=<key> in address bar to persist
  // debug sessions
  persistState(getDebugSessionKey())
)

export default enhancer
