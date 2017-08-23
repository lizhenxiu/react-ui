import React, { Component } from 'react'
import { UploadButton } from 'robot-ui/Upload'

class UploadExamp extends Component {
  render() {
    return (
      <div>
        <UploadButton
          options={{
            baseUrl: '/api',
            wrapperDisplay: 'block',
            fileFieldName: 'fileName',
            isCutting: true
          }}
        />
      </div>
    )
  }
}

export default UploadExamp
