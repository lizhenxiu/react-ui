import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Explain extends Component {
  static robotUIName = 'Explain'
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }
  static defaultProps = {
    children: null,
    title: 'this is a title'
  }
  render() {
    return (
      <div>
        <section className="rob-row">
          <div className="rob-col-lg-24">
            <div className="code-box" style={{ padding: '20PX' }}>
              {this.props.children}
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Explain