import React, { Component } from 'react'
import SwitchExamp from './SwitchExamp'

import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Code from '../../template/CodeTemp'
import Explain from '../../template/Explain'

class TestSwitch extends Component {
  render() {
    // switchBtn表格数据
    let switchBtnDescription = [{
      name: 'typeInput',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: 'switchBtn类型(true为input,false为span)'
    }, {
      name: 'small',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '是否为小图标'
    }, {
      name: 'text',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '是否有文字'
    }, {
      name: 'innerIcon',
      type: 'string',
      required: 'false',
      default: '',
      description: '是否有icon图标'
    }, {
      name: 'checked',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '初始化状态是否为开启'
    }, {
      name: 'handleClick',
      type: 'func',
      required: 'false',
      default: '() => {}',
      description: '点击事件(返回按钮的状态)'
    }]
    return (
      <div>
        <Container title={'Switch 按钮'}>
          <Explain>
            Switch组件包括SwitchInput和SwitchSpan两种子组件。样式分为5种，详情查看code。<br />
            备注：innerIcon类型string，值为icon的class值。handleClick为func，值为返回的按钮的状态。
          </Explain>
          <Description description={switchBtnDescription} />
          <div>
            <SwitchExamp />
          </div>
          <Code>
            { `import React, { Component } from 'react'
              import Button, { IconButton, SwitchBtn } from 'robot-ui/Button'

              ......

              <h4><span>Switch 示例</span></h4>
              <SwitchBtn typeInput checked handleClick={this.btnClick} />
              <br />
              <SwitchBtn checked handleClick={this.btnClick} />
              <SwitchBtn small checked handleClick={this.btnClick} />
              <SwitchBtn text checked handleClick={this.btnClick} />
              <SwitchBtn innerIcon="rob-icon-home" checked handleClick={this.btnClick} />`}
          </Code>
        </Container>
      </div>
    )
  }
}

export default TestSwitch