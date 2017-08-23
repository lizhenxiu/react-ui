import React, { Component } from 'react'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import Explain from '../../template/Explain'
import StepsExamp from './StepsExamp'

class TestSteps extends Component {
  render() {
    let testDescription = [
      {
        name: 'confData',
        type: 'array',
        default: '[]',
        description: '步骤条数据来源',
        required: 'true'
      },
      {
        name: 'stepType',
        type: 'string',
        default: 'horizenStep',
        description: '步骤条类型（horizenStep/verticalStep/imgStep）',
        required: 'false'
      }
    ]
    return (
      <div>
        <Container title={'Steps 步骤条'}>
          <Explain>
            steps组件分为三类，横向、竖向、图片（horizenStep/verticalStep/imgStep）。<br />
            备注：数组数据key值 （setpName：步骤名称/describe：步骤描述/iconValue:icon上的文字或者icon className/isIcon:是否添加icon/isFinish:环节是否通过)
          </Explain>
          <Description description={testDescription} />
          <div>
            <StepsExamp />
          </div>
          <Code>
            {`
              import React, { Component } from 'react'
              import Steps from 'robot-ui/Steps'
              
              .....
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
              render() {
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
              }`
            }
          </Code>
        </Container>
      </div>
    )
  }
}

export default TestSteps