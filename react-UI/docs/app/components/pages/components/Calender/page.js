import React, { Component } from 'react'
import { CalenderInput } from 'robot-ui/Calender'
import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Code from '../../template/CodeTemp'
// 描述
export const propsDescription = [{
  name: 'lable',
  type: 'string',
  required: 'true',
  default: '',
  description: '日历插件的input框的名字'
}, {
  name: 'content',
  type: 'string',
  required: 'true',
  default: '',
  description: '选择的内容是日期还是月份，d代表日期；m代表月份'
}, {
  name: 'isWorkday',
  type: 'string',
  required: 'true',
  default: '',
  description: '是否只能选择工作日'
}, {
  name: 'multiSelect',
  type: 'string',
  required: 'true',
  default: '',
  description: '日期是否多选'
}, {
  name: 'hasFooter',
  type: 'string',
  required: 'true',
  default: '',
  description: '是否有底部的四个按钮那一栏'
}, {
  name: 'isRange',
  type: 'string',
  required: 'true',
  default: '',
  description: '是选择日期范围还是选择单个具体日期'
}, {
  name: 'getDate',
  type: 'function',
  required: 'true',
  default: '',
  description: '获取选择的日期的函数'
}, {
  name: 'dateFormat',
  type: 'string',
  required: 'true',
  default: 'yyyy-mm-dd',
  description: ''
}]
const styles = {
  clear: {
    clear: 'both'
  }
}
// import Description from '../DescriptionTemp'
class TestCalender extends Component {
  getDate = (date) => {
    console.log(date)
  }
  render() {
    return (
      <div>
        <Container title={'Calender 组件'}>
          <Description description={propsDescription} />
          <section>
            <section className="markdown">
              <h4>
                这是一个Calender组件，样式使用robot-style.<br />
              </h4>
            </section>
            <CalenderInput content="d" isWorkday="false" label="选择日期" multiSelect="false" hasFooter="false" isRange="false" dateFormat="yyyy-mm-dd" getDate={this.getDate} />
            <CalenderInput content="d" isWorkday="false" label="点击确定" multiSelect="false" hasFooter="true" isRange="false" dateFormat="yyyy-mm-dd" getDate={this.getDate} />
            <CalenderInput content="d" isWorkday="false" label="时间多选" multiSelect="true" hasFooter="true" isRange="false" dateFormat="yyyy-mm-dd" getDate={this.getDate} />
            <CalenderInput content="d" isWorkday="true" label="选择工作日" multiSelect="false" hasFooter="false" isRange="false" dateFormat="yyyy-mm-dd" getDate={this.getDate} />
            <CalenderInput content="m" isWorkday="false" label="选择月份" multiSelect="false" hasFooter="false" isRange="false" dateFormat="yyyy-mm-dd" getDate={this.getDate} />
            <CalenderInput content="d" isWorkday="false" label="日期范围" multiSelect="false" hasFooter="true" isRange="true" dateFormat="yyyy-mm-dd" getDate={this.getDate} />
            <div style={styles.clear} />
          </section>
          <Code>
            {
              `<CalenderInput content="d" isWorkday="false" label="选择日期" multiSelect="false" hasFooter="false" isRange="false" />
            <CalenderInput content="d" isWorkday="false" label="点击确定" multiSelect="false" hasFooter="true" isRange="false" />
            <CalenderInput content="d" isWorkday="false" label="时间多选" multiSelect="true" hasFooter="true" isRange="false" />
            <CalenderInput content="d" isWorkday="true" label="选择工作日" multiSelect="false" hasFooter="false" isRange="false" />
            <CalenderInput content="m" isWorkday="false" label="选择月份" multiSelect="false" hasFooter="false" isRange="false" />
            <CalenderInput content="d" isWorkday="false" label="日期范围" multiSelect="false" hasFooter="true" isRange="true" />`}
          </Code>
        </Container>
      </div>
    )
  }
}
export default TestCalender
// 属性一：content---是日期还是月份;属性二：isWorkday:---是否选择工作日;属性三：multiSelect---是否是多选日期;属性四：hasFooter
