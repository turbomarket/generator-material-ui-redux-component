import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import configureStore from '../../../store'

// creamos el store de redux
const store = configureStore()

const Wrapper = (props) => (
  <Provider store={store}>
    <MuiThemeProvider>
      {props.children}
    </MuiThemeProvider>
  </Provider>
)

Wrapper.propTypes = {
  children: PropTypes.element.isRequired,
}

export default Wrapper
