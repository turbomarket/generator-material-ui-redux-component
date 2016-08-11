import React, { Component } from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../store'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import <%= name %> from '../containers/<%= name %>Container.jsx'
// dependencia requerida por material-ui
// (http://www.material-ui.com/#/get-started/installation)
import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

window.React = window.parent.React = React
// window.ReactDOM = window.parent.ReactDOM = ReactDOM;

// creamos el store de redux
const store = configureStore()

// componente que contiene toda la aplicación
const App = (props) => (
  <MuiThemeProvider>
    <<%= name %> {...props} />
  </MuiThemeProvider>
)

let DevTools

// pasos asicionales en caso que estemos en ambiente de desarrollo
if (process.env.NODE_ENV !== 'production' && process.env.DEV_TOOLS !== 'false') {
  DevTools = require('../components/DevTools.jsx').default // eslint-disable-line global-require

  // workaround to allow the use of react-devtools in case this app is inside an
  // iframe
  if (window.parent !== window) {
    window.__REACT_DEVTOOLS_GLOBAL_HOOK__ =        // eslint-disable-line no-underscore-dangle
      window.parent.__REACT_DEVTOOLS_GLOBAL_HOOK__ // eslint-disable-line no-underscore-dangle
  }
} else {
  // como no estamos en desarrollo, el componente DevTools debe ser vacío
  DevTools = () => (<div />)
}

// elemento donde se renderizará la aplicación
const root = document.getElementById('root')

// eslint-disable-next-line react/prefer-stateless-function
export class AppComponent extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <App {...this.props} />
          <DevTools />
        </div>
      </Provider>
    )
  }
}

export const mountApp = (props) => (
  render(
    <AppComponent {...props} />,
    root
  )
)

export const unmountApp = () => {
  unmountComponentAtNode(root)
}
