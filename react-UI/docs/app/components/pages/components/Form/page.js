import React, { Component } from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'robot-ui/Table'
// import { Link } from 'react-router-dom'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import Other from '../../template/OtherTemp'
import Explain from '../../template/Explain'

import FormExamp from './FormEXamp'

class TestForm extends Component {
  render() {
    // let testDescription = [
    //   {
    //     name: 'children',
    //     type: 'node',
    //     default: '',
    //     description: '子节点',
    //     required: 'required'
    //   }, {
    //     name: 'style',
    //     type: 'object',
    //     default: '',
    //     description: '样式'
    //   }
    // ]
    let formItemDescription = [
      {
        name: 'name',
        type: 'string',
        default: '',
        description: 'formItem名称,触发submit时会作为key传递给form组件的handleSubmit方法',
        required: 'required'
      },
      {
        name: 'type',
        type: 'string',
        default: '',
        description: 'formItem类型',
        required: 'required'
      }, {
        name: 'lable',
        type: 'string',
        default: '',
        description: 'formItem名称（会显示到左侧）',
        required: 'required'
      }, {
        name: 'required',
        type: 'bool',
        default: 'false',
        description: '是否必填',
        required: ''
      }, {
        name: 'emptyMsg',
        type: 'string',
        default: '请先选择该项',
        description: '空提示',
        required: ''
      }, {
        name: 'errorMsg',
        type: 'string',
        default: '请输入正确格式的内容',
        description: '错误提示',
        required: ''
      }, {
        name: 'disabled',
        type: 'bool',
        default: 'false',
        description: '是否禁用',
        required: ''
      }, {
        name: 'placeholder',
        type: 'string',
        default: '',
        description: '提示文字',
        required: ''
      }, {
        name: 'pattern',
        type: 'pattern',
        default: '/.*/',
        description: '必须满足的正则表达式',
        required: ''
      }, {
        name: 'defaultValue',
        type: 'string',
        default: '',
        description: '默认值',
        required: ''
      }, {
        name: 'containLeftIcon',
        type: 'bool',
        default: 'false',
        description: '是否有左侧小图标',
        required: ''
      }, {
        name: 'containRightIcon',
        type: 'bool',
        default: 'false',
        description: '是否有右侧侧小图标',
        required: ''
      }, {
        name: 'containErrorIcon',
        type: 'bool',
        default: 'false',
        description: '是否有错误提示小图标',
        required: ''
      },
      {
        name: 'leftIconName',
        type: 'string',
        default: 'rob-icon-calendar',
        description: '左侧小图标类名',
        required: ''
      },
      {
        name: 'containRightIcon',
        type: 'string',
        default: 'rob-icon-calendar',
        description: '右侧小图标类名',
        required: ''
      },
      {
        name: 'errorIconName',
        type: 'string',
        default: 'rob-icon-calendar',
        description: '错误小图标类名',
        required: ''
      }, {
        name: 'handleChange',
        type: 'func',
        default: '',
        description: '输入框内值发生变化时触发的回调函数',
        required: ''
      }, {
        name: 'isTestRule',
        type: 'bool',
        default: 'false',
        description: '是否校验规则',
        required: ''
      }
    ]
    let rules = [
      {
        name: '手机号',
        value: 'tel',
        rule: '/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/',
        description: ''
      }, {
        name: '身份证号',
        value: 'IDCard',
        rule: '/^(^[1-9]\\d{7}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])\\d{3}$)|(^[1-9]\\d{5}[1-9]\\d{3}((0\\d)|(1[0-2]))(([0|1|2]\\d)|3[0-1])((\\d{4})|\\d{3}[Xx])$)$/',
        description: ''
      }, {
        name: '邮箱',
        value: 'email',
        rule: '/\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*/',
        description: ''
      }, {
        name: '邮编',
        value: 'postcode',
        rule: '/^[1-9]\\d{5}(?!\\d)$/',
        description: ''
      }
    ]
    let formSelectDescription = [
      {
        name: 'name',
        type: 'string',
        default: '',
        description: 'formItem名称,触发submit时会作为key传递给form组件的handleSubmit方法',
        required: 'required'
      },
      {
        name: 'type',
        type: 'string',
        default: 'default',
        description: 'formSelect类型，可选default（普通下拉框），searchSelect(搜索下拉框)，selectAndInput（选择&&输入框）',
        required: ''
      }, {
        name: 'lable',
        type: 'string',
        default: '',
        description: 'formItem名称（会显示到左侧）',
        required: 'required'
      }, {
        name: 'options',
        type: 'array',
        default: [],
        description: '所有选项集合，每一项必须包含至少value和text两个属性，可选disabled属性',
        required: ''
      }, {
        name: 'required',
        type: 'bool',
        default: 'false',
        description: '是否必填',
        required: ''
      }, {
        name: 'emptyMsg',
        type: 'string',
        default: '请先选择该项',
        description: '空提示',
        required: ''
      }, {
        name: 'disabled',
        type: 'bool',
        default: 'false',
        description: '是否禁用',
        required: ''
      }, {
        name: 'defaultValue',
        type: 'string',
        default: '',
        description: '默认值,需传入选中option的value',
        required: ''
      }, {
        name: 'containErrorIcon',
        type: 'bool',
        default: 'false',
        description: '是否有错误提示小图标',
        required: ''
      },
      {
        name: 'errorIconName',
        type: 'string',
        default: 'rob-icon-calendar',
        description: '错误小图标类名',
        required: ''
      }, {
        name: 'handleSelect',
        type: 'func',
        default: '',
        description: '选择时触发的回调函数',
        required: ''
      }, {
        name: 'remarkIsRequired',
        type: 'bool',
        default: 'true',
        description: '补充信息是否必填（type为selectAndInput时有效）',
        required: ''
      }, {
        name: 'remarkPattern',
        type: 'pattern',
        default: '/.*/',
        description: '补充信息校验规则',
        required: ''
      }, {
        name: 'remarkPlaceholder',
        type: 'string',
        default: '',
        description: '补充信息提示',
        required: ''
      }, {
        name: 'remarkDefaultValue',
        type: 'string',
        default: '',
        description: '补充信息默认值',
        required: ''
      }, {
        name: 'remarkEmptyMsg',
        type: 'string',
        default: '请输入补充信息',
        description: '补充信息空提示',
        required: ''
      }, {
        name: 'remarkErrMsg',
        type: 'string',
        default: '补充信息格式错误',
        description: '补充信息错误提示',
        required: ''
      }, {
        name: 'handleRemarkChange',
        type: 'func',
        default: '',
        description: '补充信息变更处理函数，用户输入时调用',
        required: ''
      },
      {
        name: 'handleSearch',
        type: 'func',
        default: '',
        description: '模糊搜索关键词输入触发，接收一个text参数',
        required: ''
      },
      {
        name: 'isTestRule',
        type: 'bool',
        default: 'false',
        description: '是否校验规则',
        required: ''
      }
    ]
    let formCheckboxDescription = [
      {
        name: 'name',
        type: 'string',
        default: '',
        description: 'formItem名称，触发submit时会作为key传递给form组件的handleSubmit方法',
        required: 'required'
      }, {
        name: 'type',
        type: 'string',
        default: 'default',
        description: 'checkbox类型',
        required: ''
      }, {
        name: 'lable',
        type: 'string',
        default: '',
        description: 'formItem名称（会显示到左侧）',
        required: ''
      }, {
        name: 'required',
        type: 'bool',
        default: 'false',
        description: '是否必填',
        required: ''
      }, {
        name: 'options',
        type: 'array',
        default: '[]',
        description: '所有选项集合',
        required: ''
      }, {
        name: 'emptyMsg',
        type: 'string',
        default: '请填写该选项',
        description: '空提示',
        required: ''
      }, {
        name: 'handleChange',
        type: 'func',
        default: '',
        description: '选中变更时触发函数',
        required: ''
      }, {
        name: 'containErrorIcon',
        type: 'bool',
        default: 'false',
        description: '错误提示是否有图标',
        required: ''
      }, {
        name: 'errorIconName',
        type: 'string',
        default: 'rob-icon-calendar',
        description: '错误提示图标名称',
        required: ''
      },
      {
        name: 'isTestRule',
        type: 'bool',
        default: 'false',
        description: '是否校验规则',
        required: ''
      }
    ]

    let datepickerDescription = [
      {
        name: 'name',
        type: 'string',
        default: '',
        description: 'formItem名称，触发submit时会作为key传递给form组件的handleSubmit方法',
        required: 'required'
      }, {
        name: 'required',
        type: 'bool',
        default: 'false',
        description: '是否必选',
        required: ''
      }, {
        name: 'defaultValue',
        type: 'string',
        default: '',
        description: '默认值',
        required: ''
      }, {
        name: 'emptyMsg',
        type: 'string',
        default: '请选择该选项',
        description: '空提示',
        required: ''
      }, {
        name: 'containErrorIcon',
        type: 'bool',
        default: 'false',
        description: '错误提示是否有图标',
        required: ''
      }, {
        name: 'errorIconName',
        type: 'string',
        default: '',
        description: '错误提示图标className',
        required: ''
      }, {
        name: 'lable',
        type: 'string',
        required: 'true',
        default: '',
        description: '日历插件的input框的名字'
      }, {
        name: 'isWorkday',
        type: 'bool',
        required: '',
        default: 'true',
        description: '是否只能选择工作日'
      }, {
        name: 'multiSelect',
        type: 'bool',
        required: '',
        default: 'true',
        description: '日期是否多选'
      }, {
        name: 'hasFooter',
        type: 'bool',
        required: '',
        default: 'true',
        description: '是否有底部的四个按钮那一栏'
      }, {
        name: 'isRange',
        type: 'bool',
        required: '',
        default: 'true',
        description: '是选择日期范围还是选择单个具体日期'
      }, {
        name: 'handleSelect',
        type: 'function',
        required: '',
        default: '',
        description: '获取选择的日期的函数'
      }, {
        name: 'dateFormat',
        type: 'string',
        required: '',
        default: 'yyyy-mm-dd',
        description: '日期格式'
      },
      {
        name: 'isTestRule',
        type: 'bool',
        default: 'false',
        description: '是否校验规则',
        required: ''
      }
    ]
    return (
      <div>
        <Container title={'Form'}>
          <Explain>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;7月20日修改为单个组件（解耦），去除关联关系，使用时引入formInput，FormSelect，FormCheckbox，FormDatepucker其中一个即可，如需赋值请使用ref.setValue(val：string)方法<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;默认blur触发规则校验，如果用户直接点击提交按钮请修改props中的额isTestRule为true，否则不会校验；
            {
              /*
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Form组件包含FormInput，FormSelect，FormCheckbox，FormDatepucker，FormSubmit，FormClear六种子组件，使用时请根据业务场景选择其中的一个或多个组合创建需要的form表单；
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;整个Form组件将为您处理每个子组件的空校验，格式校验，错误提示以及展示样式，同时帮您完成整个表单数据的结果封装，当用户触发提交操作，Form组件将会校验整个表单中是否存在异常（必填项为空或已输入的值不符合要求），
            若存在异常将提示用户修该或完成表单，若没有异常将把整个表单的当前数据封装成json格式调用您传入的handleSubmit方法作为参数返回给你；而清空操作你只需要引入FormClear就可以了；
               */
            }
          </Explain>
          {
            /*
           <Description description={testDescription} /> */
          }
          <div>
            <FormExamp />
          </div>
          <Code>
            {`
            import React, { Component } from 'react'
            import {
              Form,
              FormInput,
              FormSelect,
              FormCheckbox,
              FormDatepicker,
              FormSubmit,
              FormClear
            } from 'robot-ui/Form'
            
            ......

            <div>
                <div className="rob-col-md-12">
                  <FormInput name="tel" type="tel" lable="电话号码" containErrorIcon required />
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
                  <FormDatepicker name="nico" type="asa" label="日期控件" required isRange />
                </div>
            </div>
            `}
          </Code>
          <Other title="FormInput属性说明">
            <Description description={formItemDescription} />
          </Other>
          <Other title="FormInput组件支持type和校验规则一览">
            <div>
              <Table striped hoverEffect divide>
                <TableHeader>
                  <TableHeaderColumn> Name(名称)</TableHeaderColumn>
                  <TableHeaderColumn> Value（值）</TableHeaderColumn>
                  <TableHeaderColumn> Rule（校验规则）</TableHeaderColumn>
                  <TableHeaderColumn> Description（说明）</TableHeaderColumn>
                </TableHeader>
                <TableBody>
                  {
                    rules.map((item, i) => (<TableRow key={`${i}`} checkboxIdName={`checkbox${i}`}>
                      <TableRowColumn> {item.name}</TableRowColumn>
                      <TableRowColumn> {item.value}</TableRowColumn>
                      <TableRowColumn> {item.rule}</TableRowColumn>
                      <TableRowColumn> {item.description}</TableRowColumn>
                    </TableRow>)
                    )
                  }
                </TableBody>
              </Table>
            </div>
          </Other>
          <Other title="FormSelect组件属性一览">
            <Description description={formSelectDescription} />
          </Other>
          <Other title="FormCheckbox组件属性一览">
            <Description description={formCheckboxDescription} />
          </Other>
          <Other title="FormDatepicker组件属性一览">
            <Description description={datepickerDescription} />
          </Other>
          {
            /*
            <Other title="FormSubmit组件属性一览">
            <Description description={[
              {
                name: 'children',
                type: 'node',
                default: '',
                description: '子节点',
                required: 'required'
              }, {
                name: 'handleSubmit',
                type: 'func',
                default: '',
                description: '表单提交事件，接收一个参数，将所有子组件的name和value以{name:value}的形式返回'
              }
            ]}
            />
          </Other>
          <Other title="FormClear组件属性一览">
            <Description description={[
              {
                name: 'children',
                type: 'node',
                default: '',
                description: '子节点',
                required: 'required'
              }, {
                name: 'handleClear',
                type: 'func',
                default: '',
                description: '表单情空事件，清空之后调用，非必填'
              }
            ]}
            />
          </Other>
            */
          }
        </Container>
      </div>
    )
  }
}
export default TestForm