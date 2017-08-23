/* eslint-disable */
import React, { PureComponent } from 'react'
import { shallow, mount, render } from 'enzyme'
import { FormInput } from 'robot-ui/Form'


describe('<Input />', () => {
	let props = {
		name: '宋亚奇',
		lable: '姓名',
		type: 'text',
		defaultValue: '啦啦啦',
		emptyMsg: '请输入值',
		required: false
	}
	let context = {
		context: {
			creactFormData: (...rest) => {
				// console.log(rest, '---context')
			},
			ee: {
				addListener: (...rest) => {
					// console.log(rest, 'addListener')
				},
				removeEvent: (...rest) => {
					// console.log(rest, 'removeEvent')
				}
			}
		}
	}
	let realDom = shallow(<FormInput {...props} />, context)
	it('测试Label的内容', () => {
		expect(realDom.text()).toEqual(`${props.lable}:`)
	})

	it('测试状态的值', () => {
		expect(realDom.state().value).toEqual(props.defaultValue)
		let value = '这个更改后的value'
		realDom.setState({ value }) // 更改状态的value
		expect(realDom.state().value).toEqual(value)
	})

	it('错误信息', () => {
		let realDom = shallow(<FormInput name="tel" type="tel" lable="身份证号" containErrorIcon required />, context)
		console.log(realDom.find('.rob-error-messag').length)
		realDom.find('input').simulate('blur')
		// expect(realDom.)
		expect(realDom.find('.rob-error-message')).toEqual(1)
	})

})
