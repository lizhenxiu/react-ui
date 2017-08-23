import React, { Component } from 'react'
import ProgressExamp from './ProgressExamp'

import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Explain from '../../template/Explain'
import Code from '../../template/CodeTemp'

class TestProgress extends Component {
  render() {
    // progress表格数据
    let progressDescription = [{
      name: 'gressType',
      type: 'string',
      required: 'false',
      default: 'outerPercent',
      description: 'grogress类别(outerPercent/outerIcon/innerNumber)'
    }, {
      name: 'color',
      type: 'string',
      required: 'false',
      default: '',
      description: 'grogress进度条颜色'
    }, {
      name: 'iscomplate',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: 'grogress进度条完成'
    }]
    return (
      <Container title={'Progress 组件'}>
        <Explain>
          progress组件分为三种类型，外带百分比、外带图标和内带数字。<br />
          备注：iscomplate为布尔类型，为true时，立刻完成即100%。为false时，最大值为95%。
        </Explain>
        <Description description={progressDescription} />
        <div>
          <ProgressExamp />
        </div>
        <Code>
          {
            `import React, { Component } from 'react'
            import Progress from 'robot-ui/Progress'
            import Button from 'robot-ui/Button'

            ......

            <div className="col-md-12 col-sm-12 bd-solid">
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
            </div>
            <Button label="完成按钮" className="rob-btn-default" action={this.iscomplate} />`
          }
        </Code>
      </Container>
    )
  }
}

export default TestProgress