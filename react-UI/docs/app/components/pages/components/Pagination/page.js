import React, { Component } from 'react'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import PaginationExamp from './PaginationExamp'
class TestPagination extends Component {
  render() {
    let paginationDescription = [
      {
        name: 'style',
        type: 'object',
        default: '',
        description: '样式'
      },
      {
        name: 'type',
        type: 'string',
        default: 'default',
        description: '分页类型，待补充',
        required: ''
      }, {
        name: 'pageSize',
        type: 'number',
        default: '10',
        description: '每页显示多少条',
        required: ''
      }, {
        name: 'currentPage',
        type: 'number',
        default: '1',
        description: '默认选中第几页',
        required: ''
      }, {
        name: 'dataCount',
        type: 'number',
        default: '0',
        description: '数据总条数',
        required: ''
      }, {
        name: 'forbidJump',
        type: 'bool',
        default: 'false',
        description: '是否禁止跳页',
        required: ''
      }, {
        name: 'maxSize',
        type: 'number',
        default: '5',
        description: '显示多少按钮，为偶数时会有1个偏差',
        required: ''
      }, {
        name: 'hidePreAndNext',
        type: 'bool',
        default: 'false',
        description: '是否隐藏上一页和下一个按钮',
        required: ''
      }, {
        name: 'previousLabel',
        type: 'string',
        default: '<',
        description: '上一页按钮显示字段',
        required: ''
      }, {
        name: 'nextLabel',
        type: 'string',
        default: '>',
        description: '下一页按钮显示字段',
        required: ''
      }, {
        name: 'onChange',
        type: 'func',
        default: '',
        description: 'required',
        required: 'required'
      }
    ]
    return (
      <div>
        <Container title={'Pagination'}>
          <Description description={paginationDescription} />
          <div>
            <PaginationExamp />
          </div>
          <Code>
            {`
            import React, { Component } from 'react'
            import Pagination from 'robot-ui/Pagination'

                ...

            this.state = {
              conf: {
                type: 'default',
                pageSize: 10,
                currentPage: 1,
                dataCount: 300,
                maxSize: 8,
                allowJump: true,
                showPreAndNext: false,
                onChange: (currentPage) => {
                  console.log(currentPage)
                }
              }
            }

                ...

            <Pagination {...this.state.conf} />

                ...
            `}
          </Code>
        </Container>
      </div>
    )
  }
}

export default TestPagination