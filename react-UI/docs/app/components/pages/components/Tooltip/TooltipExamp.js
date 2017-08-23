import React, { Component } from 'react'
import Tooltip from 'robot-ui/Tooltip'
import Button, { IconButton } from 'robot-ui/Button'

class TooltipExamp extends Component {
  render() {
    return (
      <div>
        <h4><span>button 示例</span></h4>
        <Tooltip tooltip="this is a tooltip" tooltipPosition="right">
          <Button label="默认按钮right" className="rob-btn-default" style={{ float: 'left' }} />
        </Tooltip>
        <Tooltip tooltip="this is a tooltip" tooltipPosition="top">
          <Button label="默认按钮top" className="rob-btn-default" style={{ float: 'left' }} />
        </Tooltip>
        <Tooltip tooltip="this is a tooltip" tooltipPosition="bottom">
          <Button label="默认按钮bottom" className="rob-btn-default" style={{ float: 'left' }} />
        </Tooltip>
        <Tooltip tooltip="this is a tooltip" tooltipPosition="left">
          <Button label="默认按钮left" className="rob-btn-default" />
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
        </Tooltip>
      </div>
    )
  }
}

export default TooltipExamp