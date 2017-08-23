import React, { Component } from 'react'
import Pagination from 'robot-ui/Pagination'
class PaginationExamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      conf: {
        type: 'default',
        pageSize: 10,
        currentPage: 1,
        dataCount: 200,
        maxSize: 6,
        allowJump: true,
        showPreAndNext: false,
        previousLabel: '上一页',
        onChange: (currentPage) => {
          console.log(currentPage)
        }
      }
    }
  }
  render() {
    return (
      <div>
        <Pagination {...this.state.conf} />
      </div>
    )
  }
}

export default PaginationExamp