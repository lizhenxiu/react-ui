import React, { Component } from 'react'
import {
  Route
} from 'react-router-dom'
import RobLinks from '../../routers/robLinks'
import RobRoutes from '../../routers/robRoutes'
class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      paddingLeft: '300px'
    }
  }
  componentDidMount = () => {}
  getNavWidth = (node) => {
    if (!node) {
      this.setState({ paddingLeft: '89px' })
    } else {
      this.setState({ paddingLeft: '300px' })
    }
  }
  render() {
    return (
      <div className={'rob-row rob-clearmargin'}>
        <div className={'rob-col-24'}>
          <div>
            <div style={{ height: '100%', position: 'fixed', zIndex: '88', left: '0px', top: '70px', overflow: 'auto', paddingBottom: '70px', backgroundColor: '#3d4957' }}>
              <RobLinks navProps={this.props} navWidth={this.getNavWidth} />
            </div>
            <div style={{ height: '70px', width: '100%', background: '#35baff', color: '#ffffff', position: 'fixed', zIndex: '88', left: '0', top: '0' }}>
              <span style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'left', paddingLeft: '50px', lineHeight: '70px' }}>robotUI</span>
              <span style={{ fontSize: '25px', fontWeight: 'bold', textAlign: 'right', paddingRight: '50px', lineHeight: '70px', float: 'right' }}>about</span>
            </div>
            {/* component container */}
            <div style={{ padding: `100px 30px 30px ${this.state.paddingLeft}` }}>
              <Route
                render={() => (
                  <RobRoutes />
                )}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default HomePage
