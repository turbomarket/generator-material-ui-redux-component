import { configure } from '@kadira/storybook'

function loadStories() {
  // eslint-disable-next-line global-require
  require('../stories/<%= namecamel %>')
  // require as many stories as you need.
}

configure(loadStories, module)
