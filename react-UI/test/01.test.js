/* eslint-disable */
import React, { PureComponent } from 'react'
import { shallow, mount, render } from 'enzyme'
import Button from 'robot-ui/Button'


describe('<Button />', () => {
	let label = '我是一个按钮'
	let realDom = shallow(<Button label={label} />)
  it('测试button中的内容是否是传入的字符串', () => {
    expect(realDom.contains(label)).toBe(true)
  })
  it('测试Button更改状态', () => {
  	let name = '状态'
  	realDom.setState({ name })
  	expect(realDom.state('name')).toEqual(name)
  })
  it('测试Button更改Props', () => {
  	let name = '属性'
  	realDom.setProps({ name })
  	expect(realDom.props('name')).toEqual(name)
  })
})
