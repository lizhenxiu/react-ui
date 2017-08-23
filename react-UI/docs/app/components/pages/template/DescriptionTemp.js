import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'robot-ui/Table'

class Description extends Component {
  static robotUIName='Description'
  static propTypes = {
    description: PropTypes.array
  }
  static defaultProps = {
    description: []
  }

  render() {
    let nodes = []
    this.props.description.forEach((item, index) => {
      nodes.push(
        <TableRow key={`${index}`} checkboxIdName={`checkbox${index}`}>
          <TableRowColumn> {item.name}</TableRowColumn>
          <TableRowColumn> {item.type}</TableRowColumn>
          <TableRowColumn> {item.required}</TableRowColumn>
          <TableRowColumn> {item.default}</TableRowColumn>
          <TableRowColumn> {item.description}</TableRowColumn>
        </TableRow>)
    })

    return (
      <div>
        <Table striped hoverEffect divide>
          <TableHeader>
            <TableHeaderColumn> Name(名称)</TableHeaderColumn>
            <TableHeaderColumn> Type（类型）</TableHeaderColumn>
            <TableHeaderColumn> Required(是否必填)</TableHeaderColumn>
            <TableHeaderColumn> Default（默认值）</TableHeaderColumn>
            <TableHeaderColumn> Description（说明）</TableHeaderColumn>
          </TableHeader>
          <TableBody>
            {
              nodes
            }
          </TableBody>
        </Table>
      </div>

    )
  }
}
export default Description
