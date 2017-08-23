import React, { Component } from 'react'
import LoadingExamp from './LoadingExamp'

import Description from '../../template/DescriptionTemp'
import Container from '../../template/Container'
import Explain from '../../template/Explain'
import Code from '../../template/CodeTemp'

class TestLoading extends Component {
  render() {
    // loading表格数据
    let loadingDescription = [{
      name: 'loadType',
      type: 'string',
      required: 'true',
      default: '',
      description: 'loading类别(loadingIcon/loadingIconBlue/loadingRing/loadingImg)'
    }, {
      name: 'content',
      type: 'any',
      required: 'false',
      default: '',
      description: 'loading主体内容,可传参数类型为validElement和string'
    }, {
      name: 'showLoading',
      type: 'bool',
      required: 'false',
      default: 'false',
      description: 'loading关闭参数，true显示false关闭'
    }]
    return (
      <Container title={'Loading 组件'}>
        <Explain>
          loading组件分为四种样式，分别为loadingIcon/loadingIconBlue/loadRing/loadImg。<br />
          备注：showLoading为布尔类型，为true时，一直显示loading。为false时，隐藏loading。
        </Explain>
        <Description description={loadingDescription} />
        <div>
          <LoadingExamp />
        </div>
        <Code>
          {
            `import React, { Component } from 'react'
            import Loading from 'robot-ui/Loading'
            import Button from 'robot-ui/Button'

            ......

            <Button label="样式一" className="rob-btn-default" action={() => this.showLoading('1')} />
            <Button label="样式二" className="rob-btn-default" action={() => this.showLoading('2')} />
            <Button label="样式三" className="rob-btn-default" action={() => this.showLoading('3')} />
            <Button label="样式四" className="rob-btn-default" action={() => this.showLoading('4')} />
            <Loading loadType="loadingIcon" content="this is a loading-one!" showLoading={this.state.loadingIcon} />
            <Loading loadType="loadingIconBlue" content="这个是第二个loading！" showLoading={this.state.loadingIconBlue} />
            <Loading loadType="loadingRing" content="第三个loading框" showLoading={this.state.loadRing} />
            <Loading loadType="loadingImg" content={showElement} showLoading={this.state.loadImg} />`
          }
        </Code>
      </Container>
    )
  }
}

export default TestLoading