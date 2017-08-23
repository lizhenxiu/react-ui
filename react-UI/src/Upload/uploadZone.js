import React, { Component } from 'react'
import PropTypes from 'prop-types'

class UploadZone extends Component {
  constructor(props) {
    super(props)

    this.state = { files: [], imgUrlArray: [] }
  }
  static propTypes={
    onChange: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    btnValue: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    config: PropTypes.object
  }
  static defaultProps = {
    multiple: true,
    btnValue: 'Upload Image',
    className: 'upload-button',
    height: '120px',
    width: '100px',
    config: {}
  }

  _onChange=(event) => {
    event.preventDefault()
    let target = event.target
    let files = target.files
    let count = this.props.multiple ? files.length : 1
    let i
    for (i = 0; i < count; i++) {
      files[i].thumb = URL.createObjectURL(files[i])
    }
// convert to array
    files = Array.prototype.slice.call(files, 0)

    files = files.filter(function (file) {
      return /image/i.test(file.type)
    })
    console.log(files)
// this.props.onChange(files, event)
    this.uploadFile(files)
    this.setState({
      imgurl: files[0].thumb
    })
  }

  uploadFile=(files) => {
    let postUrl = this.props.config.postUrl
    let formData = new FormData()

    // 解析参数对象
    for (let key in this.props.config.data) {
      formData.append(key, this.props.config.data[key])
    }
    let arrayTemp = []
    // 获取选取的url
    for (let value of files) {
      arrayTemp.push(value.thumb)
    }
    this.setState({
      imgUrlArray: arrayTemp
    })

    formData.append('file', files)

    fetch(postUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'multipart/form-data' },
      body: formData,
    }).then((response) => response.json())
        .then((responseData) => {
                //      countTemp=countTemp+1;
                //   if(countTemp==count){
                //       uploadImgOrders(orderId,'','',navigator)
                //    }
          console.log('上传成功', responseData)
        }).catch((e) => {
          console.error('error', e)
        })
  }
  render() {
    return (
      <div className="rob-upload">
        <div className="rob-upload-card">
          <div className="rob-upload-card-type rob-upload-add">
            <i className="rob-icon-plus" />
            <input type="file" onChange={this._onChange} multiple={this.props.multiple} />
          </div>
          <label>上传图片</label>
        </div>
        {this.state.imgUrlArray.length > 0 ?
         this.state.imgUrlArray.map((uri, i) => <img key={i} src={uri} alt={i} style={{ width: this.props.width, height: this.props.height }} />
        ) : null}
      </div>
    )
  }
}


export default UploadZone
