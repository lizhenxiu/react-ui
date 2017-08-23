import React, { Component } from 'react'
import ButtonExamp from './ButtonExamp'

import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Code from '../../template/CodeTemp'
import Explain from '../../template/Explain'
import Other from '../../template/OtherTemp'

class TestButton extends Component {
  render() {
    // btn表格数据
    let btnDescription = [{
      name: 'className',
      type: 'string',
      required: 'false',
      default: '',
      description: '按钮class类名'
    }, {
      name: 'style',
      type: 'object',
      required: 'false',
      default: '{}',
      description: '按钮行内样式'
    }, {
      name: 'label',
      type: 'string',
      required: 'false',
      default: '',
      description: '按钮的value值'
    }, {
      name: 'disabled',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '按钮是否禁用'
    }]
    // icon表格数据
    let iconDescription = [{
      name: 'className',
      type: 'string',
      required: 'false',
      default: '',
      description: 'icon按钮class类名'
    }, {
      name: 'style',
      type: 'object',
      required: 'false',
      default: '{}',
      description: 'icon按钮行内样式'
    }, {
      name: 'label',
      type: 'string',
      required: 'false',
      default: '',
      description: 'icon按钮的后面的文字'
    }, {
      name: 'iconClassName',
      type: 'string',
      required: 'true',
      default: '',
      description: 'icon按钮class类名'
    }, {
      name: 'iconStyle',
      type: 'object',
      required: 'false',
      default: '{}',
      description: 'icon按钮行内样式'
    }]
    return (
      <div>
        <Container title={'Button 按钮'}>
          <Explain>
            button组件分为两大类，Button、IconButton。Button有19种，详情查看code。IconButton有11种，详情查看code。<br />
            备注：Button、IconButton label为按钮的value值。Button disabled为是否禁用按钮。
          </Explain>
          <Description description={btnDescription} />
          <div>
            <ButtonExamp />
          </div>
          <Code>
            { `import React, { Component } from 'react'
              import Button, { IconButton, SwitchBtn } from 'robot-ui/Button'

              ......


              <h4><span>Button 示例</span></h4>
              <Button label="文字按钮" className="rob-btn-link" />
              <Button label="默认按钮" className="rob-btn-default" />
              <Button label="默认空心" className="rob-btn-default rob-btn-line" />
              <Button label="默认虚线" className="rob-btn-default rob-btn-dashed" />
              <Button label="主要按钮" className="rob-btn-main" />
              <Button label="次要按钮" className="rob-btn-minor" />
              <Button label="次要按钮2" className="rob-btn-minor2" />
              <Button label="默认按钮" className="rob-btn-default rob-btn-circle" />
              <Button label="主要按钮" className="rob-btn-main2 rob-btn-circle" />
              <Button label="次要按钮" className="rob-btn-minor2 rob-btn-circle" />
              <Button label="成功按钮" className="rob-btn-success" />
              <Button label="成功空心" className="rob-btn-success rob-btn-line" />
              <Button label="成功虚线" className="rob-btn-success rob-btn-dashed" />
              <Button label="警告按钮" className="rob-btn-warning" />
              <Button label="警告空心" className="rob-btn-warning rob-btn-line" />
              <Button label="警告虚线" className="rob-btn-warning rob-btn-dashed" />
              <Button label="危险按钮" className="rob-btn-danger" />
              <Button label="危险空心" className="rob-btn-danger rob-btn-line" />
              <Button label="危险虚线" className="rob-btn-danger rob-btn-dashed" />
              <h4><span>IconButton 示例</span></h4>
              <IconButton iconClassName="rob-icon-home" className="rob-btn-default" label="下载" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-minor" label="下载" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-minor2" label="下载" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-link" label="下载" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-main" label="返回" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-default rob-btn-icon-only" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-minor rob-btn-icon-only" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-minor2 rob-btn-icon-only" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-default rob-btn-circle rob-btn-icon-only" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-minor rob-btn-circle rob-btn-icon-only" />
              <IconButton iconClassName="rob-icon-home" className="rob-btn-minor2 rob-btn-circle rob-btn-icon-only" />`}
          </Code>
          <Other title="iconBtn属性说明">
            <Description description={iconDescription} />
          </Other>
        </Container>
      </div>
    )
  }
}

export default TestButton