/**
 * Created by agony on 2017-5-23.
 */
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Prism from 'prismjs'

class Code extends Component {
  static robotUIName = 'Code'
  static propTypes = {
    children: PropTypes.node
  }
  static defaultProps = {
    children: null
  }
  constructor(props) {
    super(props)
    console.log(this)
    this.state = {
      toggle: false
    }
  }

  showCode() {
    this.setState({
      toggle: !this.state.toggle
    })
  }

  componentDidMount() {
    Prism.highlightAll()
  }

  render() {
    return (
      <div>
        <section className="code-box-meta markdown">
          <div className="code-box-title">
            <a href="">
              code
            </a>
          </div>
          <p>
            点击显示代码
          </p>
          <i className="rob-icon rob-icon-home code-show" onClick={this.showCode.bind(this)} />
        </section>
        <section className="code-box-content" id="Slider" style={{ display: this.state.toggle === true ? 'block' : 'none' }}>
          <pre style={{ padding: '42px 20px 50px' }}>
            <code className="language-markup" >
              {this.props.children}
            </code>
          </pre>
        </section>
      </div>
    )
  }
}

export default Code