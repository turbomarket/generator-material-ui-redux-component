import { mountApp, unmountApp } from '../components/app.jsx'
import { /* TODO: import desired methods here */ } from './helpers/<%= name %>TestsUtils'
import { /* TODO: import desired constants here */ } from './helpers/<%= name %>TestsConstants'
import { takeScreenShot } from './helpers/phantomJSHelper'

// const isRoughlyEqual = () => (true)

describe(/* TODO: adjust describe text */ '', () => {
  let renderedAppComponent

  beforeEach(() => { renderedAppComponent = mountApp({ id: '<%= namelower %>-test' }) })
  afterEach(unmountApp)

  describe(/* TODO: adjust describe text */ '', () => {
    beforeEach(() =>{
      // TODO: add beforeEach code
    })

    it('', () => {
      // TODO: add expect() here
    })
  })

  // TODO: add more specs here
})

