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

class TableRowColumn extends Component {
  static robotUIName = 'TableRowColumn'
  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
    wrap: PropTypes.bool,
    rowspan: PropTypes.number,
    colspan: PropTypes.number
  }

  static defaultProps = {
    children: null,
    style: {},
    wrap: false,
    rowspan: 0,
    colspan: 0
  }
  render() {
    return (
      <td style={this.props.wrap ? style.wrap : style.noWrap} rowSpan={this.props.rowspan} colSpan={this.props.colspan}>
        {this.props.children}
      </td>
    )
  }
}

export default TableRowColumn