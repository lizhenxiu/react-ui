import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Other extends Component {
  static robotUIName = 'Other'
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
        <article className="markdown">
          <section className="markdown">
            <h2 id={this.props.title}><span>{this.props.title}</span><a href={`#${this.props.title}`} className="anchor">#</a></h2>
          </section>
        </article>
        <section className="rob-row">
          <div className="rob-col-lg-24">
            <div className="code-box">
              <section className="code-box-demo">
                {this.props.children}
              </section>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
export default Other