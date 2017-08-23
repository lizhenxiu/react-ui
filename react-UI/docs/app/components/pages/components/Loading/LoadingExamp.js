import React, { Component } from 'react'
import Loading from 'robot-ui/Loading'
import Button from 'robot-ui/Button'

class LoadingExamp extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loadingIcon: false,
      loadingIconBlue: false,
      loadingRing: false,
      loadingImg: false
    }
  }
  showLoading = (type) => {
    type === '1' ? this.setState({ loadingIcon: true }) :
    type === '2' ? this.setState({ loadingIconBlue: true }) :
    type === '3' ? this.setState({ loadingRing: true }) :
    type === '4' ? this.setState({ loadingImg: true }) : null
    setTimeout(
      () => this.hideLoading(),
      3000
    )
  }
  hideLoading = () => {
    this.setState({ loadingIcon: false })
    this.setState({ loadingIconBlue: false })
    this.setState({ loadingRing: false })
    this.setState({ loadingImg: false })
  }
  render() {
    const showElement = (
      <a className="rob-btn rob-btn-link">
        <i className="rob-icon-home" />下载
      </a>
    )
    return (
      <div>
        <Button label="样式一" className="rob-btn-default" onClick={() => this.showLoading('1')} />
        <Button label="样式二" className="rob-btn-default" onClick={() => this.showLoading('2')} />
        <Button label="样式三" className="rob-btn-default" onClick={() => this.showLoading('3')} />
        <Button label="样式四" className="rob-btn-default" onClick={() => this.showLoading('4')} />
        <Loading loadType="loadingIcon" content="this is a loading-one!" showLoading={this.state.loadingIcon} />
        <Loading loadType="loadingIconBlue" content="这个是第二个loading！" showLoading={this.state.loadingIconBlue} />
        <Loading loadType="loadingRing" content="第三个loading框" showLoading={this.state.loadingRing} />
        <Loading loadType="loadingImg" content={showElement} showLoading={this.state.loadingImg} />
      </div>
    )
  }
}

export default LoadingExamp