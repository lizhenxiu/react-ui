import React, { Component } from 'react'
import PropTypes from 'prop-types'
import VerticalMenu from 'robot-ui/Verticalmenu'
import components from './components'

export default class RobLinks extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  static propTypes = {
    navProps: PropTypes.object,
    navWidth: PropTypes.func
  }
  static defaultProps = {
    navProps: {},
    navWidth: () => {}
  }
  componentDidMount = () => {
    let navArray = this.props.navProps.location.pathname.split('/')
    let navName = navArray[navArray.length - 1]
    components.forEach((value) => {
      if (value.path === navName) {
        this.setState({ tab: value.id })
      }
    })
  }
  handleClick = (node) => {
    if (node && node.path) {
      this.props.navProps.history.push(`/components/${node.path}`)
    } else {
      this.props.navWidth(node)
    }
  }
  render() {
    return (
      <VerticalMenu confData={components} handleClick={this.handleClick} showSidebarIcon menuWidth="256px" selectMenuId={this.state.tab} />
    )
  }
}