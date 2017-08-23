import React, { Component } from 'react'
import Progress from 'robot-ui/Progress'
import Button from 'robot-ui/Button'

class ProgressExamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      iscomplate: false
    }
  }
  iscomplate = () => {
    this.setState({ iscomplate: true })
  }
  render() {
    return (
      <div>
        <h2>进度条(外带百分比)</h2>
        <Progress /><br />
        <Progress gressType="outerPercent" /><br />
        <h2>进度条(外带图标)</h2>
        <Progress gressType="outerIcon" color="is-success" /><br />
        <Progress gressType="outerIcon" color="is-exception" /><br />
        <h2>进度条(内带数字)</h2>
        <Progress gressType="innerNumber" /><br />
        <Progress gressType="innerNumber" color="is-success" /><br />
        <Progress gressType="innerNumber" color="is-exception" iscomplate={this.state.iscomplate} /><br />
        <Button label="完成按钮" className="rob-btn-default" onClick={this.iscomplate} />
      </div>
    )
  }
}

export default ProgressExamp