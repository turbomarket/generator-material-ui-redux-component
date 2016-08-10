import domMatchers from 'jasmine_dom_matchers/matchers'

const matchers = Object.assign({},
  domMatchers,
  // agrega más matchers aquí
  )

// agregamos los matchers adicionales a Jasmine, para poder usarlos en los spec files
jasmine.getEnv().beforeEach(() => {
  jasmine.addMatchers(matchers)
})
