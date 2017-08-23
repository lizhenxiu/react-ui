import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'
import components from './components'
export default class RobRoutes extends Component {
  render() {
    return (
      <div>
        {
          components.map((item, i) => (
            <Route path={`/components/${item.path}`} component={item.component} key={`componentRoute${i}`} />
          )
          )
        }

      </div>
    )
  }
}
