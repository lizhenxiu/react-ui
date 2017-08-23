import React, { Component } from 'react'
import SwitchBtn from 'robot-ui/Switch'

class SwitchExamp extends Component {
  btnClick = (state) => {
    console.log(state)
  }
  render() {
    return (
      <div>
        <h4><span>switch 示例</span></h4>
        <SwitchBtn typeInput checked handleClick={this.btnClick} />
        <br />
        <SwitchBtn checked handleClick={this.btnClick} />
        <SwitchBtn small checked handleClick={this.btnClick} />
        <SwitchBtn text checked handleClick={this.btnClick} />
        <SwitchBtn innerIcon="rob-icon-home" checked handleClick={this.btnClick} />
      </div>
    )
  }
}

export default SwitchExamp