import React, { Component } from 'react'
import Steps from 'robot-ui/Steps'

class StepsExamp extends Component {
  constructor(props) {
    super(props)
    // rob-is-text文本rob-is-success颜色isIcon有图标
    this.confData = [
      {
        setpName: '步骤一',
        describe: '步骤一描述',
        iconValue: 'rob-icon rob-icon-home',
        isIcon: true,
        isFinish: true
      }, {
        setpName: '步骤二',
        describe: '步骤二描述',
        iconValue: 'rob-icon rob-icon-home',
        isIcon: true,
        isFinish: false
      }, {
        setpName: '步骤三',
        describe: '步骤三描述',
        iconValue: 3,
        isIcon: false,
        isFinish: false
      }
    ]
    this.confData3 = [
      {
        setpName: '步骤一',
        describe: '步骤一描述',
        isIcon: true,
        isFinish: true,
        iconValue: 'ioc_info icon-f1'
      }, {
        setpName: '步骤二',
        describe: '步骤二描述',
        isIcon: true,
        isFinish: true,
        iconValue: 'ioc_info icon-f1'
      }, {
        setpName: '步骤三',
        describe: '步骤三描述',
        isIcon: true,
        isFinish: false,
        iconValue: 'ioc_info icon-f02'
      }, {
        setpName: '步骤四',
        describe: '步骤四描述',
        isIcon: true,
        isFinish: false,
        iconValue: 'ioc_info icon-f03'
      }, {
        setpName: '步骤五',
        describe: '步骤五描述',
        isIcon: true,
        isFinish: false,
        iconValue: 'ioc_info icon-f03'
      }
    ]
  }


  render() {
    const style = {
      marginTop: { marginTop: '30px' }
    }
    return (
      <div >
        <div style={style.marginTop}>
          <h3>步骤条</h3>
          <Steps confData={this.confData} />
        </div>
        <br />
        <br />
        <br />
        <div style={style.marginTop}>
          <h3>步骤条(无图片垂直)</h3>
          <Steps stepType="verticalStep" confData={this.confData} />
        </div>
        <br />
        <br />
        <br />
        <div style={style.marginTop}>
          <h3>步骤条(图片三步骤)</h3>
          <Steps stepType="imgStep" confData={this.confData3} />
        </div>
      </div>
    )
  }
}

export default StepsExamp
