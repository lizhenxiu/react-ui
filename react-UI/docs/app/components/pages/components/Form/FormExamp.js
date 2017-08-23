import React, { Component } from 'react'
import {
  FormInput,
  FormSelect,
  FormCheckbox,
  FormDatepicker
} from 'robot-ui/Form'
class FormExamp extends Component {
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
        <div className="rob-col-md-12">
          <FormInput name="tel" type="tel" lable="身份证号" containErrorIcon required />
        </div>
        <div className="rob-col-md-12">
          <FormSelect
            name="default"
            lable="普通下拉框"
            required
            containErrorIcon
            defaultValue="1"
            options={[
              { text: '选项1', value: '1' },
              { text: '选项2', value: '2', disabled: true },
              { text: '选项3', value: '3' },
              { text: '选项4', value: '4' },
              { text: '选项5', value: '5' }
            ]}
          />
        </div>
        <div className="rob-col-md-12">
          <FormSelect
            name="searchSelect"
            type="searchSelect"
            lable="搜索下拉框"
            required
            containErrorIcon
            options={[
              { text: '选项1', value: '1' },
              { text: '选项2', value: '2', disabled: true },
              { text: '选项3', value: '3' },
              { text: '选项4', value: '4' },
              { text: '选项5', value: '5' }
            ]}
          />
        </div>
        <div className="rob-col-md-12">
          <FormSelect
            name="selectAndInput"
            type="selectAndInput"
            lable="选择输入框"
            required
            remarkIsRequired
            remarkPattern={/[0-9]{1,5}/}
            containErrorIcon
            options={[
              { text: '选项1', value: '1' },
              { text: '选项2', value: '2', disabled: true },
              { text: '选项3', value: '3' },
              { text: '选项4', value: '4' },
              { text: '选项5', value: '5' }
            ]}
          />
        </div>
        <div className="rob-col-md-12">
          <FormCheckbox
            name="testcheckbox"
            lable="this is checkbox"
            containErrorIcon
            options={[{
              text: 'item1',
              value: '',
              disabled: false,
              checked: false
            }, {
              text: 'item2',
              value: '',
              disabled: false,
              checked: true
            }, {
              text: 'item3',
              value: '',
              disabled: true,
              checked: false
            }]}
            required
            handleChange={obj => {
              console.log(obj)
            }}
          />
        </div>
        <div className="rob-col-md-12">
          <FormDatepicker name="nico" type="asa" label="日期控件" required isRange defaultValue={{ startDate: '2017-01-01', endDate: '2018-12-11' }} />
        </div>
        <div className="rob-col-md-12" />
      </div>
    )
  }
}

export default FormExamp