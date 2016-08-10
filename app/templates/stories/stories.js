import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { AppComponent } from '../appComponent.jsx'

storiesOf('<%= name %>', module)
  .add(
    // TODO: adjust the story name
    '<%= name %> default story',
    () => (
    // TODO: adjust props to set the desired state for this story
    <AppComponent id={'<%= namelower %>1'} />
  ))
  // TODO: add more stories here
