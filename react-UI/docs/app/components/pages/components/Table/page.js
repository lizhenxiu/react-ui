import React, { Component } from 'react'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import TableExamp from './TableExamp'
import Other from '../../template/OtherTemp'
import Explain from '../../template/Explain'
class TestTable extends Component {
  render() {
    let tablePropsDescription = [
      {
        name: 'children',
        type: 'node',
        default: '',
        description: '子节点',
        required: 'required'
      }, {
        name: 'style',
        type: 'object',
        default: '',
        description: '样式'
      }, {
        name: 'striped',
        type: 'bool',
        default: 'false',
        description: '隔行变色（斑马线）'
      }, {
        name: 'hoverEffect',
        type: 'bool',
        default: 'false',
        description: 'hover效果'
      }, {
        name: 'divide',
        type: 'bool',
        default: 'false',
        description: '分割竖线'
      }, {
        name: 'containCheckbox',
        type: 'bool',
        default: 'false',
        description: '是否有复选框'
      }, {
        name: 'checkboxType',
        type: 'string',
        default: 'default',
        description: '复选框类型，支持"default"（默认）,"circular"（圆角）,"fill"（填充）三种'
      }, {
        name: 'selectAllDisabled',
        type: 'bool',
        default: 'false',
        description: '全选按钮是否禁用'
      }, {
        name: 'defaultSelectAll',
        type: 'bool',
        default: 'false',
        description: '是否默认全部选中'
      }, {
        name: 'selectAllLable',
        type: 'string',
        default: '',
        description: '全选lable名称'
      }, {
        name: 'handleSelectAll',
        type: 'func',
        default: '',
        description: '全选时触发的回调方法'
      }, {
        name: 'containPagination',
        type: 'bool',
        default: 'false',
        description: '是否有分页'
      }
    ]

    let tableRowColumnPropsDescription = [
      {
        name: 'children',
        type: 'node',
        default: '',
        description: '子节点',
        required: 'required'
      }, {
        name: 'wrap',
        type: 'bool',
        default: 'false',
        description: '是否换行显示',
        required: ''
      }, {
        name: 'rowspan',
        type: 'number',
        default: '0',
        description: '垂直合并多少单元格',
        required: ''
      }, {
        name: 'colspan',
        type: 'number',
        default: '0',
        description: '水平合并多少单元格',
        required: ''
      }
    ]
    let TableRowPropsDescription = [
      {
        name: 'children',
        type: 'node',
        default: '',
        description: '子节点',
        required: 'required'
      }, {
        name: 'style',
        type: 'object',
        default: '',
        description: '样式',
        required: ''
      }, {
        name: 'checkboxDisabled',
        type: 'bool',
        default: 'false',
        description: '是否禁用该行选择框',
        required: ''
      }, {
        name: 'checkboxChecked',
        type: 'bool',
        default: 'false',
        description: '是否默认选中该行',
        required: ''
      }, {
        name: 'checkboxLabel',
        type: 'string',
        default: '',
        description: '该行checkbox提示文字',
        required: ''
      }, {
        name: 'handleSelect',
        type: 'func',
        default: '',
        description: '该行选中/取消选中时触发的回调方法，可接收一个参数"checked",值为true/false',
        required: ''
      }
    ]
    return (
      <div>
        <Container title={'Table'}>
          <Explain>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Table组件包含Table和他的三个子组件TableHeader，TableBody和TableFooter，TableHeader组件包含TableHeaderColumn子组件，TableBody和TableFooter包含TableRow子组件，TableRow组件又包含TableRowColumn子组件，
           他们只是对原生form标签及其子元素做了些封装，使用方法也基本一致；
            <br />
            组件结构和与原生table元素对应关系如下：
            <pre>
              {`
                Table（table）
                    |
                    |-----TableHead （thead）
                    |            |
                    |            |_ _ _ _ TableHeadColumn （th）
                    |
                    |-----TableBody  （tbody）
                    |            |
                    |            |_ _ _ _TableRow  （tr）
                    |                       |
                    |                       |_ _ _TableRowColumn  （td）
                    |
                    |_ _ _TableFooter  （tfoot）
                                 |
                                 |_ _ _ _TableRow  （tr）
                                            |
                                            |_ _ _TableRowColumn  （td）
              `}
            </pre>
          </Explain>
          <Description description={tablePropsDescription} />
          <div>
            <TableExamp />
          </div>
          <Code>
            {`
            import React, { Component } from 'react'
            import {
              Table,
              TableBody,
              TableHeader,
              TableHeaderColumn,
              TableRow,
              TableRowColumn,
            } from 'robot-ui/Table'

            .....
            
            <div>
              <Table containCheckbox={this.state.containCheckbox} striped={this.state.striped} hoverEffect={this.state.hoverEffect} divide={this.state.divide} pagination={this.state.pagination} checkboxType={this.state.checkboxType}>
                <TableHeader>
                  <TableHeaderColumn> Name</TableHeaderColumn>
                  <TableHeaderColumn> Type</TableHeaderColumn>
                  <TableHeaderColumn> Required</TableHeaderColumn>
                  <TableHeaderColumn> Default</TableHeaderColumn>
                  <TableHeaderColumn> Description</TableHeaderColumn>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                  </TableRow>
                  <TableRow>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                    <TableRowColumn> examp</TableRowColumn>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
            `}
          </Code>
          <Other title="TableRow属性说明">
            <Description description={TableRowPropsDescription} />
          </Other>
          <Other title="TableRowColumn属性说明">
            <Description description={tableRowColumnPropsDescription} />
          </Other>
        </Container>
      </div>
    )
  }
}

export default TestTable