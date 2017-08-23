import React, { Component } from 'react'
import VerticalMenuExamp from './VerticalMenuExamp'

import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Explain from '../../template/Explain'
import Code from '../../template/CodeTemp'

class TestVerticalMenu extends Component {
  render() {
    // verticalmenu表格数据
    let verticalDescription = [{
      name: 'menuType',
      type: 'string',
      required: 'false',
      default: '',
      description: '竖向菜单类型(menuClick/menuHover/menuShow)'
    }, {
      name: 'confData',
      type: 'array',
      required: 'false',
      default: '[]',
      description: '竖向菜单生成的来源数据(必有字段：id,name,第一级ChildMenu，第二级grandchild。可选字段：iconClass)'
    }, {
      name: 'handleClick',
      type: 'func',
      required: 'false',
      default: '() => {}',
      description: '竖向菜单点击返回数据'
    }, {
      name: 'selectMenuId',
      type: 'any',
      required: 'false',
      default: null,
      description: '修改菜单选中,值为id'
    }, {
      name: 'showSidebarIcon',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: '是否显示菜单收缩icon'
    }, {
      name: 'menuWidth',
      type: 'string',
      required: 'false',
      default: '',
      description: '菜单的宽度，默认为100%'
    }]
    return (
      <Container title={'VerticalMenu 组件'}>
        <Explain>
          verticalMenu分为两大类，带收缩icon和不带收缩icon。每个大类下有三种小类，分别为点击显示、hover显示和左右侧显示。<br />
          备注：selectMenuId 参数类型为string，值为跳转节点的id
        </Explain>
        <Description description={verticalDescription} />
        <div>
          <VerticalMenuExamp />
        </div>
        <Code>
          {
            `import React, { Component } from 'react'
            import VerticalMenu from 'robot-ui/Verticalmenu'

            ......
            
            this.confData = [
              { name: '只有一级菜单',
                id: '1',
                ChildMenu: [],
                iconClass: 'rob-icon-settings'
              },
              { name: '有两级菜单',
                id: '2',
                iconClass: 'rob-icon-settings',
                ChildMenu: [
                  { name: '二级菜单1', id: '4', grandchild: [] },
                  { name: '二级菜单2', id: '5', grandchild: [] },
                  { name: '二级菜单3', id: '6', grandchild: [] }
                ]
              },
              { name: '有三级菜单',
                id: '3',
                iconClass: 'rob-icon-settings',
                ChildMenu: [
                  { name: '二级菜单1', id: '7', iconClass: 'rob-icon-package', grandchild: [{ name: '三级菜单11', id: '10', iconClass: 'rob-icon-user' }, { name: '三级菜单11' }] },
                  { name: '二级菜单2', id: '8', iconClass: 'rob-icon-package', grandchild: [{ name: '三级菜单22', id: '11', iconClass: 'rob-icon-user' }, { name: '三级菜单22', id: '13' }] },
                  { name: '二级菜单3', id: '9', iconClass: 'rob-icon-package', grandchild: [{ name: '三级菜单33', id: '12', iconClass: 'rob-icon-user' }, { name: '三级菜单33' }] }
                ]
              }
            ]

            <VerticalMenu confData={this.confData} handleClick={this.handleClick} />
            <br />
            <VerticalMenu menuType="menuHover" confData={this.confData} handleClick={this.handleClick} showSidebarIcon />
            <br />
            <VerticalMenu menuType="menuShow" confData={this.confData} handleClick={this.handleClick} selectMenuId={this.state.tab} showSidebarIcon />
            <br />
            <Button label="修改tab按钮" className="rob-btn-default" onClick={this.btnClick} />`
          }
        </Code>
      </Container>
    )
  }
}

export default TestVerticalMenu