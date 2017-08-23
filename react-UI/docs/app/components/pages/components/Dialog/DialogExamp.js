import React, { Component } from 'react'
import Dialog from 'robot-ui/Dialog'
import Button from 'robot-ui/Button'

class DialogExamp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
    this.getContent = (re) => { this.content = re }
    this.getActions = (re) => { this.actions = re }
  }
  // dialog弹出框显示事件
  dialogShow = {
    d1: () => {
      this.setState({ d1: true })
    },
    d2: () => {
      this.setState({ d2: true })
      this.getContent(
        <div className="rob-alert-content">
          <div className="rob-alert-content-title">
            这是一个标题
          </div>
          这是一段内容~
        </div>
      )
    },
    d3: () => {
      this.setState({ d3: true })
    },
    d4: () => {
      this.setState({ d4: true })
    },
    d5: () => {
      this.setState({ d5: true })
      this.getActions([{
        label: '确定',
        className: 'rob-btn-default'
      }])
    },
    d6: () => {
      this.setState({ d6: true })
      this.getActions([{
        label: '确定',
        className: 'rob-btn-default'
      }])
    },
    d7: () => {
      this.setState({ d7: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~7777'
      })
      this.getActions([{
        label: '取消',
        className: 'rob-btn-minor'
      }, {
        label: '确定',
        className: 'rob-btn-default'
      }])
    },
    d8: () => {
      this.setState({ d8: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~8888'
      })
      this.getActions([{
        label: '取消',
        className: 'rob-btn-minor'
      }, {
        label: '删除',
        className: 'rob-btn-danger2'
      }])
    },
    d9: () => {
      this.setState({ d9: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~9999'
      })
      this.getActions([{
        label: '取消',
        className: 'rob-btn-minor'
      }, {
        label: '确定',
        className: 'rob-btn-default'
      }])
    },
    d10: () => {
      this.setState({ d10: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~10101010'
      })
      this.getActions([{
        label: '取消',
        className: 'rob-btn-minor'
      }, {
        label: '删除',
        className: 'rob-btn-danger2'
      }])
    },
    d11: () => {
      this.setState({ d11: true })
      this.getContent(
        <div className="rob-alert-content ">
          <ul>
            <li><label >充值账户:</label><span>14234234</span></li>
            <li><label >用户ID:</label><input type="text" className="rob-input" style={{ width: '30%', display: 'inline-block' }} /></li>
            <li><label >充值金额:</label><span className="rob-alert-content-li-span">200000.00元</span></li>
          </ul>
        </div>
      )
      this.getActions([{
        label: '取消',
        className: 'rob-btn-minor'
      }, {
        label: '确定',
        className: 'rob-btn-default'
      }])
    },
    d12: () => {
      this.setState({ d12: true })
      this.getContent(
        <div className="rob-alert-content">
          <ul>
            <li><label >充值账户:</label><span>14234234</span></li>
            <li><label >用户ID:</label><input type="text" className="rob-input" style={{ width: '30%', display: 'inline-block' }} /></li>
            <li><label >充值金额:</label><span className="rob-alert-content-li-span">200000.00元</span></li>
          </ul>
        </div>
      )
      this.getActions([{
        label: '取消',
        className: 'rob-btn-minor'
      }, {
        label: '确定',
        className: 'rob-btn-default'
      }])
    },
    d13: () => {
      this.setState({ d13: true })
      this.getContent(
        <div className="rob-alert-content">
          <ul>
            <li><label >充值账户:</label><span>14234234</span></li>
            <li><label >充值金额:</label><span className="rob-alert-content-li-span">200000.00元</span></li>
          </ul>
        </div>
      )
      this.getActions([{
        label: '立即充值',
        className: 'rob-btn-default'
      }])
    },
    d14: () => {
      this.setState({ d14: true })
      this.getContent(
        <div className="rob-alert-content">
          <ul>
            <li><label >充值账户:</label><span>14234234</span></li>
            <li><label >充值金额:</label><span className="rob-alert-content-li-span">200000.00元</span></li>
          </ul>
        </div>
      )
      this.getActions([{
        label: '立即充值',
        className: 'rob-btn-default'
      }])
    },
    d15: () => {
      this.setState({ d15: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~15151515',
        icon: 'icon-f1'
      })
      this.getActions([{
        label: '知道了',
        className: 'rob-btn-default'
      }])
    },
    d16: () => {
      this.setState({ d16: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~1616161616',
        icon: 'icon-f1'
      })
      this.getActions([{
        label: '知道了',
        className: 'rob-btn-default'
      }])
    },
    d17: () => {
      this.setState({ d17: true })
      this.getContent({
        title: '这是一个标题',
        content: '这是一段内容~1616161616',
        icon: 'icon-f1',
        position: true
      })
    }
  }
  // open dialog
  handleOpen = (type) => {
    console.log(new Date().toLocaleString())
    this.dialogShow[type]()
  }
  // close Dialog
  handleClose = (name, type) => {
    console.log(name)
    this.setState({ [type]: false })
  }
  render() {
    return (
      <div>
        <Button className="rob-btn-default" label="只有内容(带蒙板)" onClick={() => this.handleOpen('d1')} />
        <Button className="rob-btn-default" label="内容+内标题+右上关闭按钮" onClick={() => this.handleOpen('d2')} />
        <Button className="rob-btn-default" label="内容+单独标题+右上关闭按钮" onClick={() => this.handleOpen('d3')} />
        <Button className="rob-btn-default" label="内容+单独标题带颜色+右上关闭按钮" onClick={() => this.handleOpen('d4')} />
        <Button className="rob-btn-default" label="内容+按钮+右上关闭按钮" onClick={() => this.handleOpen('d5')} />
        <Button className="rob-btn-default" label="标题+内容+按钮+右上关闭按钮" onClick={() => this.handleOpen('d6')} />
        <Button className="rob-btn-default" label="内容+双按钮(带背景颜色,确定按钮)+右上关闭按钮" onClick={() => this.handleOpen('d7')} />
        <Button className="rob-btn-default" label="内容+双按钮(带背景颜色,删除按钮)+右上关闭按钮" onClick={() => this.handleOpen('d8')} />
        <Button className="rob-btn-default" label="内容+双按钮(不带背景颜色,确定按钮)+右上关闭按钮" onClick={() => this.handleOpen('d9')} />
        <Button className="rob-btn-default" label="内容+双按钮(不带背景颜色,删除按钮)+右上关闭按钮" onClick={() => this.handleOpen('d10')} />
        <Button className="rob-btn-default" label="多条内容+单独标题带颜色+右上关闭按钮+双按钮" onClick={() => this.handleOpen('d11')} />
        <Button className="rob-btn-default" label="多条内容+单独标题不带颜色+右上关闭按钮+双按钮带背景" onClick={() => this.handleOpen('d12')} />
        <Button className="rob-btn-default" label="多条内容+单独标题带颜色+右上关闭按钮+按钮" onClick={() => this.handleOpen('d13')} />
        <Button className="rob-btn-default" label="多条内容+单独标题不带颜色+右上关闭按钮+按钮带背景颜色" onClick={() => this.handleOpen('d14')} />
        <Button className="rob-btn-default" label="icon+内容+内标题+右上关闭按钮+按钮" onClick={() => this.handleOpen('d15')} />
        <Button className="rob-btn-default" label="icon+内容+内标题+右上关闭按钮+带背景的按钮" onClick={() => this.handleOpen('d16')} />
        <Button className="rob-btn-default" label="icon+内容+内标题(不带蒙版)" onClick={() => this.handleOpen('d17')} />
        <Dialog
          showCover
          open={this.state.d1}
          onRequestClose={(name) => this.handleClose(name, 'd1')}
          content="这是一段内容~ 啊啊啊啊啊啊啊啊啊啊啊啊啊，啊啊啊啊啊啊啊啊啊啊"
          autoClose
        />
        <Dialog
          showCloseBtn
          open={this.state.d2}
          onRequestClose={(name) => this.handleClose(name, 'd2')}
          content={this.content}
        />
        <Dialog
          showCloseBtn
          open={this.state.d3}
          onRequestClose={(name) => this.handleClose(name, 'd3')}
          title="这是一个标题3333"
          content="这是一段内容~"
        />
        <Dialog
          showCloseBtn
          open={this.state.d4}
          onRequestClose={(name) => this.handleClose(name, 'd4')}
          title="这是一个标题4444"
          titleClassName="rob-alert-title-color"
          content="这是一段内容~"
        />
        <Dialog
          showCloseBtn
          open={this.state.d5}
          onRequestClose={(name) => this.handleClose(name, 'd5')}
          content="这是一段内容~5555"
          actions={this.actions}
          actionClassName="rob-alert-button-color"
        />
        <Dialog
          showCloseBtn
          open={this.state.d6}
          onRequestClose={(name) => this.handleClose(name, 'd6')}
          title="这是一个标题"
          content="这是一段内容~66666"
          actions={this.actions}
          actionClassName="rob-alert-button"
        />
        <Dialog
          showCloseBtn
          open={this.state.d7}
          onRequestClose={(name) => this.handleClose(name, 'd7')}
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button-color"
        />
        <Dialog
          showCloseBtn
          open={this.state.d8}
          onRequestClose={(name) => this.handleClose(name, 'd8')}
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button-color"
        />
        <Dialog
          showCloseBtn
          open={this.state.d9}
          onRequestClose={(name) => this.handleClose(name, 'd9')}
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button"
        />
        <Dialog
          showCloseBtn
          open={this.state.d10}
          onRequestClose={(name) => this.handleClose(name, 'd10')}
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button"
        />
        <Dialog
          showCloseBtn
          open={this.state.d11}
          onRequestClose={(name) => this.handleClose(name, 'd11')}
          title="这是一个标题"
          titleClassName="rob-alert-title-color"
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button"
        />
        <Dialog
          showCloseBtn
          open={this.state.d12}
          onRequestClose={(name) => this.handleClose(name, 'd12')}
          title="这是一个标题"
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button-color"
        />
        <Dialog
          showCloseBtn
          open={this.state.d13}
          onRequestClose={(name) => this.handleClose(name, 'd13')}
          title="这是一个标题"
          titleClassName="rob-alert-title-color"
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button"
        />
        <Dialog
          showCloseBtn
          open={this.state.d14}
          onRequestClose={(name) => this.handleClose(name, 'd14')}
          title="这是一个标题"
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button-color"
        />
        <Dialog
          showCloseBtn
          open={this.state.d15}
          onRequestClose={(name) => this.handleClose(name, 'd15')}
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button"
        />
        <Dialog
          showCloseBtn
          open={this.state.d16}
          onRequestClose={(name) => this.handleClose(name, 'd16')}
          content={this.content}
          actions={this.actions}
          actionClassName="rob-alert-button-color"
        />
        <Dialog
          open={this.state.d17}
          onRequestClose={(name) => this.handleClose(name, 'd17')}
          content={this.content}
          autoClose
          timeout={5}
        />
      </div>
    )
  }
}

export default DialogExamp