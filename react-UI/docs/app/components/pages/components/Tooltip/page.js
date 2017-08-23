import React, { Component } from 'react'
import TooltipExamp from './TooltipExamp'

import Container from '../../template/Container'
import Code from '../../template/CodeTemp'
import Description from '../../template/DescriptionTemp'
import Explain from '../../template/Explain'
class TestTooltip extends Component {
  render() {
    // tooltip表格数据
    let tooltipDescription = [{
      name: 'tooltip',
      type: 'string',
      required: 'true',
      default: '',
      description: 'tooltip显示的值'
    }, {
      name: 'tooltipPosition',
      type: 'oneOf',
      required: 'false',
      default: 'bottom',
      description: 'tooltip显示的方向(left/right/top/bottom)'
    }]
    return (
      <Container title={'tooltip 功能（button/iconButton/string）'}>
        <Explain>
          使用方式：用{'<tootip>DOM节点</tootip>'}把想要使用tooltip的DOM节点上包住（无父子节点关系）<br />
          组件参数：1.tooltip tooltip显示文字  2.tooltipPosition tooltip出现方向（详情查看属性）
        </Explain>
        <Description description={tooltipDescription} />
        <div>
          <TooltipExamp />
        </div>
        <Code>
          {`
            import React, { Component } from 'react'
            import Button, { IconButton, Tooltip } from 'robot-ui/Button'

            ......


            <h4><span>button 示例</span></h4>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="right">
              <Button label="默认按钮right" className="rob-btn-default" style={{ float: 'left' }} action={this.btnClick} />
            </Tooltip>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="top">
              <Button label="默认按钮top" className="rob-btn-default" style={{ float: 'left' }} action={this.btnClick} />
            </Tooltip>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="bottom">
              <Button label="默认按钮bottom" className="rob-btn-default" style={{ float: 'left' }} action={this.btnClick} />
            </Tooltip>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="left">
              <Button label="默认按钮left" className="rob-btn-default" action={this.btnClick} />
            </Tooltip>
            <h4><span>iconButton 示例</span></h4>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="right">
              <IconButton iconClassName="rob-icon-home" style={{ float: 'left' }} className="rob-btn-default" label="下载right" />
            </Tooltip>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="top">
              <IconButton iconClassName="rob-icon-home" style={{ float: 'left' }} className="rob-btn-default" label="下载top" />
            </Tooltip>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="bottom">
              <IconButton iconClassName="rob-icon-home" style={{ float: 'left' }} className="rob-btn-default" label="下载bottom" />
            </Tooltip>
            <Tooltip tooltip="this is a tooltip" tooltipPosition="left">
              <IconButton iconClassName="rob-icon-home" className="rob-btn-default" label="下载left" />
            </Tooltip>
            <h4><span>string 示例</span></h4>
            <Tooltip tooltip="this is a string" tooltipPosition="right">
              <a>this is a string tooltip test! right</a>
            </Tooltip>
            <br />
            <Tooltip tooltip="this is a string" tooltipPosition="top">
              <a>this is a string tooltip test! top</a>
            </Tooltip>
            <br />
            <Tooltip tooltip="this is a string" tooltipPosition="bottom">
              <a>this is a string tooltip test! bottom</a>
            </Tooltip>
            <br />
            <Tooltip tooltip="this is a string" tooltipPosition="left">
              <a>this is a string tooltip test! left</a>
            </Tooltip>`}
        </Code>
      </Container>
    )
  }
}

export default TestTooltip