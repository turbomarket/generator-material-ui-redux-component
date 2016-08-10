import <%= name %>ActionTypes from '../actions/<%= name %>ActionTypes'

const <%= namecamel %> = (state = {}, action = {}) => {
  switch (action.type) {
    case <%= name %>ActionTypes.<%= nameupper %>_ /* TODO: adjust action name */:
      return Object.assign({}, state, {
        // TODO: add properties for new state here
      })
    // TODO: add more actions here
    default:
      return state
  }
}

export default <%= namecamel %>
