import React, { Component } from 'react'
import PropTypes from 'prop-types'

import config from '../config'
if (config.useDefaultStyles) {
  require('./styles')
}

class Dialog extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showCover: false,
      showDialog: false
    }
    this.requestClose = (type) => {
      this.setState({ showDialog: false })
      if (this.state.showCover) {
        this.setState({ showCover: false })
      }
      this.props.onRequestClose(type)
    }
  }
  static propTypes = {
    title: PropTypes.any,
    titleClassName: PropTypes.string,
    content: PropTypes.any,
    contentClassName: PropTypes.string,
    actions: PropTypes.any,
    actionClassName: PropTypes.string,
    onRequestClose: PropTypes.func,
    open: PropTypes.bool,
    showCover: PropTypes.bool,
    showCloseBtn: PropTypes.bool,
    autoClose: PropTypes.bool,
    timeout: PropTypes.number
  }
  static defaultProps = {
    title: <div />,
    titleClassName: '',
    content: null,
    contentClassName: '',
    actions: null,
    actionClassName: '',
    onRequestClose: () => {},
    open: false,
    showCover: false,
    showCloseBtn: false,
    autoClose: false,
    timeout: 3
  }
  componentWillReceiveProps(props) {
    if (props.open) {
      this.setState({ showDialog: true })
      if (props.showCover) {
        this.setState({ showCover: true })
      }
      if (props.autoClose) {
        this.autoClose = setTimeout(() => {
          this.requestClose('close')
          console.log(new Date().toLocaleString())
        }, `${this.props.timeout * 1000}`)
      }
    }
  }
  componentDidMount() {}
  componentWillUnmount() {
    this.autoClose ? clearTimeout(this.autoClose) : null
  }
  render() {
    const {
      title,
      titleClassName,
      content,
      contentClassName,
      actions,
      actionClassName,
      showCloseBtn
    } = this.props
    // closeBtn Dom节点
    let closeBtnElement = showCloseBtn
    closeBtnElement = (
      <button type="button" className="rob-alert-close" aria-label="Close" onClick={() => this.requestClose('close')} >
        <span aria-hidden="true">×</span>
      </button>
    )
    // header Dom节点
    let titleElement = title
    if (React.isValidElement(title)) {
      titleElement = React.cloneElement(title)
    } else if (typeof title === 'string') {
      titleElement = (
        <div className={`rob-alert-title ${titleClassName}`}>
          {title}
        </div>
      )
    }
    // content Dom节点
    let contentElement = content
    if (React.isValidElement(content)) {
      contentElement = React.cloneElement(content)
    } else if (Array.isArray(content)) {
      console.error('error type,please pick validElement/Object/string.')
    } else if (content instanceof Object) {
      contentElement = (
        <div className={`rob-alert-content ${contentClassName}`}>
          <div className={content.position ? 'content-left' : null}>
            {content.icon ? <span className={`ioc_info ${content.icon}`} /> : null}
          </div>
          <div className={content.position ? 'content-right' : null}>
            {content.title ? <div className="rob-alert-content-title">{content.title}</div> : null}
            {content.content}
          </div>
        </div>
      )
    } else if (typeof content === 'string') {
      contentElement = (
        <div className={`rob-alert-content ${contentClassName}`}>
          {content}
        </div>
      )
    }
    // footer Dom节点
    let btnElement = actions
    if (React.isValidElement(actions)) {
      btnElement = React.cloneElement(actions)
    } else if (Array.isArray(actions)) {
      btnElement = (
        <div className={actionClassName}>
          {actions.map((btn, i) => <button type="button" key={i} className={`rob-btn ${btn.className}`} onClick={() => this.requestClose(btn.label)}>{btn.label}</button>)}
        </div>
      )
    }

    return (
      <div className={this.state.showCover ? 'rob-alert-cover' : null}>
        {this.state.showDialog ? <div className="rob-alert rob-alert-dismissible" style={{ display: this.props.open }}>
          { showCloseBtn ? closeBtnElement : null }
          { title ? titleElement : null }
          { content ? contentElement : null }
          { actions ? btnElement : null }
        </div> : null}
      </div>
    )
  }

}

export default Dialog
