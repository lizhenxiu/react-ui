import React, { Component } from 'react'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import Other from '../../template/OtherTemp'
class Test extends Component {
  render() {
    let testDescription = [
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
      }
    ]
    return (
      <div>
        <Container title={'这是一个title'}>
          <Description description={testDescription} />
          <div>
            this is example
          </div>
          <Code>
            {'<div>222</div>'}
          </Code>
          <Other title="other1">
            111
          </Other>
          <Other title="other2">
            222
          </Other>
          <Other title="other3">
            333
        </Other>
        </Container>
      </div>
    )
  }
}

export default Test