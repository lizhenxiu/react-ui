import React, { Component } from 'react'
import Button, { IconButton } from 'robot-ui/Button'

class ButtonExamp extends Component {
  render() {
    return (
      <div>
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
        <h4><span>iconButton 示例</span></h4>
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
        <IconButton iconClassName="rob-icon-home" className="rob-btn-minor2 rob-btn-circle rob-btn-icon-only" />
      </div>
    )
  }
}

export default ButtonExamp