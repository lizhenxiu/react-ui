import React, { Component } from 'react'
import Button from 'robot-ui/Button'
import { HorizenMenu } from 'robot-ui/horizenmenu'

class HorizenMenuExamp extends Component {
  constructor(props) {
    super(props)
    this.state = {}
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
    this.menuType = 'basicList'
    this.menuType1 = 'multiList'
    this.menuType2 = 'divList'
    this.menuType3 = 'navList'
  }
  handleClick = (name) => {
    console.log(name)
  }
  btnClick = () => {
    this.setState({ tab: '3' })
  }
  render() {
    return (
      <div>
        <h3>菜单</h3>
        <HorizenMenu confData={this.confData} menuType={this.menuType} handleClick={this.handleClick} />
        <HorizenMenu confData={this.confData} menuType={this.menuType1} handleClick={this.handleClick} />
        <HorizenMenu confData={this.confData} menuType={this.menuType2} handleClick={this.handleClick} />
        <HorizenMenu confData={this.confData} menuType={this.menuType3} handleClick={this.handleClick} selectMenuId={this.state.tab} />
        <br />
        <Button label="修改meun按钮" className="rob-btn-default" onClick={this.btnClick} />
      </div>
    )
  }
}

export default HorizenMenuExamp
