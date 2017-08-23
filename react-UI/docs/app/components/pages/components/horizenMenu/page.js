import React, { Component } from 'react'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import HorizenMenuExamp from './horizenMentExamp'

class TestHorizenMenu extends Component {
  render() {
    let testDescription = [
      {
        name: 'confData',
        type: 'array',
        default: '',
        description: `ParentMenuName一级菜单名称；
                  ChildMenu二级菜单名称；
                  grandchild三级菜单列表`,
        required: 'true'
      },
      {
        name: 'menuType',
        type: 'string',
        default: 'basicList',
        description: `组件类型：
                              basicList基本菜单；
                              multiList多级菜单；
                              divList横排菜单：
                              navList基本菜单`,
        required: 'false'
      },
      {
        name: 'handleClick',
        type: 'func',
        default: '() => {}',
        description: '横向菜单点击返回事件',
        required: 'false'
      },
      {
        name: 'selectMenuId',
        type: 'any',
        required: 'false',
        default: null,
        description: '修改菜单选中,值为id'
      }
    ]
    return (
      <div>
        <Container title={'HorizenMenu 横向菜单'}>
          <Description description={testDescription} />
          <div>
            <HorizenMenuExamp />
          </div>
          <Code>
            {`
             import React, { Component } from 'react'
             import { HorizenMenu } from 'robot-ui/horizenmenu'


              .....

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
              
              render() {
                return (
                  <div >
                    <h3>菜单</h3>
                    <HorizenMenu confData={this.confData} menuType={this.menuType} handleClick={this.handleClick} />
                    <HorizenMenu confData={this.confData} menuType={this.menuType1} handleClick={this.handleClick} />
                    <HorizenMenu confData={this.confData} menuType={this.menuType2} handleClick={this.handleClick} />
                    <HorizenMenu confData={this.confData} menuType={this.menuType3} handleClick={this.handleClick} selectMenuId={this.state.tab} />
                    <br />
                    <Button label="修改tab按钮" className="rob-btn-default" onClick={this.btnClick} />
                  </div>
                )
              }
            `}
          </Code>

        </Container>
      </div>
    )
  }
}

export default TestHorizenMenu