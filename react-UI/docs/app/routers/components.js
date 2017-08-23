import TestTable from '../components/pages/components/Table/page'
import TestDialog from '../components/pages/components/Dialog/page'
import TestUpload from '../components/pages/components/Upload/page'
import TestButton from '../components/pages/components/Button/page'
import TestSwitch from '../components/pages/components/Switch/page'
import TestTooltip from '../components/pages/components/Tooltip/page'
import TestPagination from '../components/pages/components/Pagination/page'
import TestTab from '../components/pages/components/Tab/page'
import Test from '../components/pages/components/Test/page'
import TestStep from '../components/pages/components/Steps/page'
import TestLoading from '../components/pages/components/Loading/page'
import TestForm from '../components/pages/components/Form/page'
import TestHorizenMenu from '../components/pages/components/horizenMenu/page'
import TestVerticalMenu from '../components/pages/components/verticalMenu/page'
import TestProgress from '../components/pages/components/Progress/page'
import TestImage from '../components/pages/components/Image/page'
// import TestCalender from '../components/pages/components/Calender/page'


const components = [
  {
    id: 1,
    name: '说明模板',
    path: 'test',
    component: Test,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  },
  {
    id: 2,
    name: 'TABLE',
    path: 'table',
    component: TestTable,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  },
  // {
  //   id: 3,
  //   name: 'CALENDER',
  //   path: 'calender',
  //   component: TestCalender,
  //   ChildMenu: [],
  //   iconClass: 'rob-icon-settings'
  // },
  {
    id: 4,
    name: 'DIALOG',
    path: 'dialog',
    component: TestDialog,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  },
  {
    id: 5,
    name: 'UPLOAD',
    path: 'upload',
    component: TestUpload,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 6,
    name: 'BUTTON',
    path: 'button',
    component: TestButton,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 7,
    name: 'SWITCH',
    path: 'switch',
    component: TestSwitch,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 8,
    name: 'TOOLTIP',
    path: 'tooltip',
    component: TestTooltip,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 9,
    name: 'TAB',
    path: 'tab',
    component: TestTab,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 10,
    name: 'PAGINATION',
    path: 'pagination',
    component: TestPagination,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 11,
    name: 'STEPS',
    path: 'steps',
    component: TestStep,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 12,
    name: 'LOADING',
    path: 'loading',
    component: TestLoading,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 13,
    name: 'PROGRESS',
    path: 'progress',
    component: TestProgress,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 14,
    name: 'FORM',
    path: 'form',
    component: TestForm,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 15,
    name: 'HorizenMenu',
    path: 'horizenmenu',
    component: TestHorizenMenu,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    id: 16,
    name: 'VerticalMenu',
    path: 'verticalmenu',
    component: TestVerticalMenu,
    ChildMenu: [],
    iconClass: 'rob-icon-settings'
  }, {
    name: 'Image',
    path: 'Image',
    component: TestImage
  }
]

export default components
