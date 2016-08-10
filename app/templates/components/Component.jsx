// @flow

import React, { PropTypes } from 'react'
import <%= name %>Original from 'material-ui/<%= name %>'

/**
 * TODO: add description here
 *
 * TODO: adjust url here
 * [http://www.material-ui.com/#/components/](http://www.material-ui.com/#/components/)
 *
 * @example ../docs/examples/<%= name %>.md
 */
class <%= name %> extends <%= name %>Original {
  static propTypes = {
    ...<%= name %>Original.propTypes,

    // TODO: adjust props

    /**
     * TODO: add prop description
     */
    propName: PropTypes.propType,
  }

  constructor() {
    super()
    // TODO: do method context binding like this:
    // this.method = this.method.bind(this)
  }

  // TODO: add methods

  render() {
    // call parent render method
    const content = super.render()

    // TODO: add code here if necessary
  }
}

export default <%= name %>
