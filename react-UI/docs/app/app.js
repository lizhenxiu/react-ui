import React from 'react'
import { render } from 'react-dom'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Navigator from './Navigator'
window.React = React
window.Perf = require('react-addons-perf')

render(
  <Router>
    <Navigator />
  </Router>
  , document.getElementById('root'))
