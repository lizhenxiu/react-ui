import React, { Component } from 'react'
import PropTypes from 'prop-types'

import { menuMap } from './dataMap'

import config from '../config'
if (config.useDefaultStyles) {
  require('./styles')
}

class VerticalMenu extends Component {
  constructor(props) {
    super(props)
    this.state = {
      fActiveState: 0,
      sActiveState: false,
      tfirstActiveState: false
    }
    this.handleClick = (event, type, callback) => {
      event ? event.stopPropagation ? event.stopPropagation() : (event.cancelBubble = true) : null  // eslint-disable-line
      let tempshow = ''
      for (let i in type) {
        tempshow += i + type[i]
      }
      let numberArray = tempshow.replace(/[^0-9]+/g, ',').substr(1).split(',')
      this.setState({ fActiveState: Number(numberArray[0]) })
      if (tempshow.indexOf('k') > -1) {
        this.setState({ sActiveState: `i${numberArray[0]}k${numberArray[1]}` })
        this.setState({ [`i${numberArray[0]}`]: true })
      } else {
        this.setState({ sActiveState: false })
      }
      if (tempshow.indexOf('j') > -1) {
        this.setState({ tActiveState: tempshow })
        if (this.props.menuType && this.props.menuType === 'menuShow') {
          this.setState({ [`i${numberArray[0]}k${numberArray[1]}`]: false })
        } else {
          this.setState({ [`i${numberArray[0]}k${numberArray[1]}`]: true })
        }
      } else {
        this.setState({ tActiveState: false })
      }
      this.setState({ [tempshow]: !this.state[tempshow] })
      callback ? this.props.handleClick(callback) : null
    }
    this.changeModal = (type) => {
      if (type === 'menuClick') {
        this.setState({ menuClickIcon: !this.state.menuClickIcon })
        this.props.handleClick(this.state.menuClickIcon)
      } else if (type === 'menuHover') {
        this.setState({ menuHoverIcon: !this.state.menuHoverIcon })
        this.props.handleClick(this.state.menuHoverIcon)
      } else if (type === 'menuShowLeft') {
        this.setState({ menuShowIcon: !this.state.menuShowIcon })
        this.props.handleClick(this.state.menuShowIcon, 'menuShowLeft')
      } else if (type === 'menuShowRight') {
        this.setState({ menuShowRight: !this.state.menuShowRight })
        this.props.handleClick(this.state.menuShowRight, 'menuShowRight')
      }
    }
  }
  static propTypes = {
    menuType: PropTypes.string,
    confData: PropTypes.array,
    handleClick: PropTypes.func,
    selectMenuId: PropTypes.any,
    showSidebarIcon: PropTypes.bool,
    menuWidth: PropTypes.string
  }
  static defaultProps = {
    menuType: 'menuClick',
    confData: [],
    handleClick: () => {},
    selectMenuId: null,
    showSidebarIcon: false,
    menuWidth: ''
  }
  deepLoop = (data, id) => {
    let curData = {}
    for (let i in data) {
      if (data[i].id === id) {
        curData = { i }
        break
      }
      for (let k in data[i].ChildMenu) {
        if (data[i].ChildMenu[k].id === id) {
          curData = { i, k }
          break
        }
        for (let j in data[i].ChildMenu[k].grandchild) {
          if (data[i].ChildMenu[k].grandchild[j].id === id) {
            curData = { i, k, j }
            break
          }
        }
      }
    }
    return curData
  }
  componentWillReceiveProps(props) {
    if (this.props.selectMenuId !== props.selectMenuId) {
      this.handleClick(event, this.deepLoop(props.confData, props.selectMenuId))
    }
  }
  render() {
    const {
      menuType
    } = this.props
    const menuElements = menuMap[menuType](this)
    return (
      <div>
        { menuElements }
      </div>
    )
  }
}

export default VerticalMenu