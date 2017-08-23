import React, { Component } from 'react'
import Button from 'robot-ui/Button'
import VerticalMenu from 'robot-ui/Verticalmenu'

class VerticalMenuExamp extends Component {
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
  }
  handleClick = (name) => {
    console.log(name)
  }
  btnClick = () => {
    this.setState({ tab: '13' })
  }
  render() {
    return (
      <div>
        <VerticalMenu confData={this.confData} handleClick={this.handleClick} selectMenuId={this.state.tab} />
        <br />
        <VerticalMenu menuType="menuHover" confData={this.confData} handleClick={this.handleClick} showSidebarIcon />
        <br />
        <VerticalMenu menuType="menuShow" confData={this.confData} handleClick={this.handleClick} showSidebarIcon />
        <br />
        <Button label="修改tab按钮" className="rob-btn-default" onClick={this.btnClick} />
      </div>
    )
  }
}

export default VerticalMenuExamp