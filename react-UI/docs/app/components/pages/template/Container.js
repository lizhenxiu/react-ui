import React, { Component } from 'react'
import PropTypes from 'prop-types'
class Container extends Component {
  static propTypes = {
    children: PropTypes.node,
    title: PropTypes.string
  }
  static defaultProps = {
    children: null,
    title: 'this is a title'
  }
  render() {
    let description, code, example, explain, others = []
    React.Children.forEach(this.props.children, (child) => {
      if (child && child.type.robotUIName === 'Description') {
        description = child
        return
      }
      if (child && child.type.robotUIName === 'Code') {
        code = child
        return
      }
      if (child && child.type.robotUIName === 'Other') {
        others.push(child)
        return
      }
      if (child && child.type.robotUIName === 'Explain') {
        explain = child
      }
      example = child
    })
    return (
      <div>
        <article className="markdown">
          <h1>{this.props.title}</h1>
          {explain || null}
          <section className="markdown">
            <h2 id="代码演示"><span>代码演示</span><a href="#代码演示" className="anchor">#</a></h2>
          </section>
        </article>
        <section className="rob-row">
          <div className="rob-col-lg-24">
            <div className="code-box">
              <section className="code-box-demo">
                {example}
              </section>
              {code}
            </div>
          </div>
        </section>
        <article className="markdown">
          <section className="markdown">
            <h2 id="属性"><span>属性</span><a href="#属性" className="anchor">#</a></h2>
          </section>
        </article>
        <section className="rob-row">
          <div className="rob-col-lg-24">
            <div className="code-box">
              <section className="code-box-demo">
                {description}
              </section>
            </div>
          </div>
        </section>
        {
          others
        }
      </div>
    )
  }
}

export default Container