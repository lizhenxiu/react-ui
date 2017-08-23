import React, { Component } from 'react'
import PropTypes from 'prop-types'

const style = {
  wrap: {
    wordBreak: 'break-all'
  },
  noWrap: {
    wordBreak: 'keep-all'
  }
}

class TableHeaderColumn extends Component {
  static robotUIName = 'TableHeaderColumn'
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    wrap: PropTypes.bool
  }

  static defaultProps = {
    children: null,
    style: {},
    wrap: false
  }
  render() {
    return (
      <th style={this.props.wrap ? style.wrap : style.noWrap}>
        {this.props.children}
      </th>
    )
  }
}


export default TableHeaderColumn