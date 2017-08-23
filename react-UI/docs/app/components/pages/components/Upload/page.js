import React, { Component } from 'react'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
// import Other from '../../template/OtherTemp'
import UploadExamp from './UploadExamp'
class TestUpload extends Component {
  render() {
    let testDescription = [
      {
        name: 'config',
        type: 'object',
        default: '',
        description: `Filetype: 图片类型，例如['jpg','png'];
                      postUrl: 接口地址;
                      data: 上传的参数,json对象;
                      multiple: 是否多选true/false`,
        required: 'required'
      }, {
        name: 'multiple',
        type: 'bool',
        default: 'true',
        description: '是否批量上传文件'
      }, {
        name: 'uploadCallBack',
        type: 'fun',
        default: '',
        description: '上传后子组件调用父组件函数，通知父组件做一些操作'
      }
    ]
    return (
      <div>
        <Container title={'Upload 上传'}>
          <Description description={testDescription} />
          <div>
            <UploadExamp />
          </div>
          <Code>
            {`
              import React, { Component } from 'react'
              import { UploadButton, UploadZone } from 'robot-ui/Upload'


              .....
              
               render() {
                return (
                  <div >
                    
                    <div>
                      <UploadZone config={config} onChange={this.onChange} multiple={this.djsConfig.multiple} />
                    </div>
                    <div>
                      <UploadButton config={config} onChange={this.onChange} multiple={this.djsConfig.multiple} />
                    </div>
                  </div>
                )
              }
            `}
          </Code>
          {/* <Other Title="属性">
            <Description description={testDescription} />
          </Other> */}

        </Container>
      </div>
    )
  }
}

export default TestUpload