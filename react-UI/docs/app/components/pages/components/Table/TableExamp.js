import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'robot-ui/Table'
class TableExamp extends Component {
  state = {
    containCheckbox: false,
    striped: false,
    hoverEffect: false,
    divide: false,
    pagination: false,
    checkboxType: 'default'

  }
  render() {
    return (
      <div>
        <div style={{ paddingBottom: '30px' }}>
          <div style={{ display: 'inline-block', paddingRight: '30px' }}>
            <input
              type="checkbox"
              className="rob-checkbox-filled-in"
              id="examp1"
              defaultChecked={false}
              onChange={() => {
                this.setState({ containCheckbox: !this.state.containCheckbox })
              }}
            />
            <label htmlFor="examp1">
              containCheckbox
                        </label>
          </div>
          <div style={{ display: 'inline-block', paddingRight: '30px' }}>
            <input
              type="checkbox"
              className="rob-checkbox-filled-in"
              id="examp2"
              defaultChecked={false}
              onChange={() => {
                this.setState({ striped: !this.state.striped })
              }}
            />
            <label htmlFor="examp2">
              striped
                        </label>
          </div>
          <div style={{ display: 'inline-block', paddingRight: '30px' }}>
            <input
              type="checkbox"
              className="rob-checkbox-filled-in"
              id="examp3"
              defaultChecked={false}
              onChange={() => {
                this.setState({ hoverEffect: !this.state.hoverEffect })
              }}
            />
            <label htmlFor="examp3">
              hoverEffect
                        </label>
          </div>
          <div style={{ display: 'inline-block', paddingRight: '30px' }}>
            <input
              type="checkbox"
              className="rob-checkbox-filled-in"
              id="examp4"
              defaultChecked={false}
              onChange={() => {
                this.setState({ divide: !this.state.divide })
              }}
            />
            <label htmlFor="examp4">
              divide
                        </label>
          </div>
        </div>
        {
          this.state.containCheckbox ? (
            <div style={{ paddingBottom: '30px' }}>
              checkboxType：
              <div style={{ display: 'inline-block', paddingRight: '30px' }}>
                <input
                  name="checkboxType"
                  type="radio"
                  id="test1"
                  value="default"
                  onChange={(e) => {
                    this.setState({
                      checkboxType: e.target.value
                    })
                  }}
                />
                <label htmlFor="test1">default</label>
              </div>
              <div style={{ display: 'inline-block', paddingRight: '30px' }}>
                <input
                  name="checkboxType"
                  type="radio"
                  id="test2"
                  value="fill"
                  onChange={(e) => {
                    this.setState({
                      checkboxType: e.target.value
                    })
                  }}
                />
                <label htmlFor="test2">fill</label>
              </div>
              <div style={{ display: 'inline-block', paddingRight: '30px' }}>
                <input
                  name="checkboxType"
                  type="radio"
                  id="test3"
                  value="circular"
                  onChange={(e) => {
                    this.setState({
                      checkboxType: e.target.value
                    })
                  }}
                />
                <label htmlFor="test3">circular</label>
              </div>
            </div>
          ) : null
        }

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
      </div>
    )
  }
}

export default TableExamp