import React, { Component } from 'react'
import DialogExamp from './DialogExamp'

import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Code from '../../template/CodeTemp'
import Explain from '../../template/Explain'
class TestDialog extends Component {
  render() {
    // dialog表格数据
    let propsDescription = [{
      name: 'title',
      type: 'any',
      required: 'false',
      default: 'false',
      description: '弹出框表头(header),可传参数类型为validElement和string'
    }, {
      name: 'titleClassName',
      type: 'string',
      required: 'false',
      default: 'false',
      description: '弹出框表头(header)class类名'
    }, {
      name: 'content',
      type: 'any',
      required: 'false',
      default: 'false',
      description: '弹出框内容(content),可传参数类型为validElement、object和string. ' +
      'object key类型(title:string,content:string,position:boolean,type:sting). ' +
      '注意：1.position表示icon的位置默认false,true的话icon在左侧. 2.type字符串有(warn/fail/success),传入的为class类名.'
    }, {
      name: 'contentClassName',
      type: 'string',
      required: 'false',
      default: 'false',
      description: '弹出框内容(content)class类名'
    }, {
      name: 'actions',
      type: 'any',
      required: 'false',
      default: 'false',
      description: '弹出框footer(btn),可传参数类型为validElement和Array.' +
      'object key类型(label:string,className:string,click:func). ' +
      '注意：1.label为按钮的value值. 2.className为按钮的class类名. 3.click为按钮的点击事件'
    }, {
      name: 'actionClassName',
      type: 'string',
      required: 'false',
      default: '',
      description: '按钮class类名'
    }, {
      name: 'onRequestClose',
      type: 'func',
      required: 'true',
      default: '() => {}',
      description: '关闭弹出框事件'
    }, {
      name: 'open',
      type: 'bool',
      required: 'true',
      default: 'none',
      description: '打开弹出框默认状态'
    }, {
      name: 'showCover',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '是否显示蒙板'
    }, {
      name: 'showCloseBtn',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '是否显示关闭按钮'
    }, {
      name: 'autoClose',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '是否自动关闭弹出框'
    }, {
      name: 'timeout',
      type: 'number',
      required: 'false',
      default: '3',
      description: '自动关闭弹出框的时间，单位为秒'
    }]
    return (
      <div>
        <Container title={'Dialog 弹出框'}>
          <Explain>
            dialog弹出框，分为17种，详情请看code区域。
            备注：showCover参数为是否显示蒙版，autoClose参数为是否自动关闭跟timeout组合使用，timeout为关闭弹出框时间。autoClose单独使用时，timeout为默认值3秒自动关闭
          </Explain>
          <Description description={propsDescription} />
          <div>
            <DialogExamp />
          </div>
          <Code>
            {
              `import React, { Component } from 'react'
              import Dialog from 'robot-ui/Dialog'
              import Button from 'robot-ui/Button'

              ......
              
              <Button className="rob-btn-default" label="只有内容(带蒙板)" action={() => this.handleOpen('d1')} />
              <Button className="rob-btn-default" label="内容+内标题+右上关闭按钮" action={() => this.handleOpen('d2')} />
              <Button className="rob-btn-default" label="内容+单独标题+右上关闭按钮" action={() => this.handleOpen('d3')} />
              <Button className="rob-btn-default" label="内容+单独标题带颜色+右上关闭按钮" action={() => this.handleOpen('d4')} />
              <Button className="rob-btn-default" label="内容+按钮+右上关闭按钮" action={() => this.handleOpen('d5')} />
              <Button className="rob-btn-default" label="标题+内容+按钮+右上关闭按钮" action={() => this.handleOpen('d6')} />
              <Button className="rob-btn-default" label="内容+双按钮(带背景颜色,确定按钮)+右上关闭按钮" action={() => this.handleOpen('d7')} />
              <Button className="rob-btn-default" label="内容+双按钮(带背景颜色,删除按钮)+右上关闭按钮" action={() => this.handleOpen('d8')} />
              <Button className="rob-btn-default" label="内容+双按钮(不带背景颜色,确定按钮)+右上关闭按钮" action={() => this.handleOpen('d9')} />
              <Button className="rob-btn-default" label="内容+双按钮(不带背景颜色,删除按钮)+右上关闭按钮" action={() => this.handleOpen('d10')} />
              <Button className="rob-btn-default" label="多条内容+单独标题带颜色+右上关闭按钮+双按钮" action={() => this.handleOpen('d11')} />
              <Button className="rob-btn-default" label="多条内容+单独标题不带颜色+右上关闭按钮+双按钮带背景" action={() => this.handleOpen('d12')} />
              <Button className="rob-btn-default" label="多条内容+单独标题带颜色+右上关闭按钮+按钮" action={() => this.handleOpen('d13')} />
              <Button className="rob-btn-default" label="多条内容+单独标题不带颜色+右上关闭按钮+按钮带背景颜色" action={() => this.handleOpen('d14')} />
              <Button className="rob-btn-default" label="icon+内容+内标题+右上关闭按钮+按钮" action={() => this.handleOpen('d15')} />
              <Button className="rob-btn-default" label="icon+内容+内标题+右上关闭按钮+带背景的按钮" action={() => this.handleOpen('d16')} />
              <Button className="rob-btn-default" label="icon+内容+内标题(不带蒙版)" action={() => this.handleOpen('d17')} />
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
              />`
            }
          </Code>
        </Container>
      </div>
    )
  }
}

export default TestDialog
