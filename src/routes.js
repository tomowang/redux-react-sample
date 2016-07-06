/**
 * Created by tomo on 2016-06-21.
 */
import React from 'react'
import { Route } from 'react-router'
import { Layout, AboutPage} from './components/'

export default (
  <Route path="/" component={Layout}>
    <Route path="/about" component={AboutPage} />
  </Route>
)
