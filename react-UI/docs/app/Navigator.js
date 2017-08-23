import React, { Component } from 'react'
import {
  Route, browserHistory
} from 'react-router-dom'
import Home from './components/pages/Home'
import Master from './components/Master'
class Navigator extends Component {
  render() {
    return (
      <div>
        <browserHistory>
          <Route exact path="/" component={Master} />
          <Route path="/components" component={Home} />
        </browserHistory>
      </div>
    )
  }
}

export default Navigator
