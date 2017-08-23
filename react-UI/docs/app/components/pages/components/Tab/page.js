import React, { Component } from 'react'
import Tab from 'robot-ui/Tab'
import Container from '../../template/Container'
import Description from '../../template/DescriptionTemp'
import Code from '../../template/CodeTemp'
import Other from '../../template/OtherTemp'
import Explain from '../../template/Explain'
class TestTab extends Component {
  render() {
    let propsDescription = [
      {
        name: 'children',
        type: 'node',
        default: '',
        description: '子节点',
        required: 'required'
      }, {
        name: 'name',
        type: 'string',
        default: 'rob-nav-tabs',
        description: '样式类名，用于决定显示那种样式',
        required: ''
      }, {
        name: 'arrow',
        type: 'bool',
        default: '',
        description: '是否显示左右方向箭头',
        required: ''
      }]
    let propsDescription1 = [{
      name: 'title',
      type: 'string',
      default: '',
      description: 'Tab名称，会显示在点击切换位置',
      required: ''
    }, {
      name: 'icon',
      type: 'string',
      default: '',
      description: 'Tab名称前的小图标，不传为无图标',
      required: ''
    }]
    return (
      <div>
        <Container title={'Tab'}>
          <Explain>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tab组件是一个父级组件，他会为每一个（一级）子元素创建一个tab，Tab的name属性决定他展示那种样式，arrow属性决定是否显示左右箭头；<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tab的（一级）子元素至少需要传递一个title属性，属性的值将会显示到tab按钮上，如果你希望tab按钮上的文字前面显示icon，那么你可以再传递一个icon属性，属性值为图标的className（ex：rob-icon-home）<br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;所以使用的时候结构应该是：<pre>{`
                    <Tab name="......">
                        <any title="......" icon="......">
                          。。。
                        </any>
                        <any title="......">
                          。。。
                        </any>
                        <any title="......">
                          。。。
                        </any>
                    </Tab>

                                                                        注：any表示任意html标签
            `}</pre>
          </Explain>
          <Description description={propsDescription} />
          <div>
            <Tab name="rob-nav-tabs">
              <div title="Home">{`
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate
                nisi qui.`}
              </div>
              <div title="Profile">{`
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
                labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
                helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`}
              </div>
              <div title="@fat">{`
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
                craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`}
              </div>
            </Tab>
            <Tab name="rob-nav-tabs1" icon="rob-icon-home">
              <div title="Home">{`
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate
                nisi qui.`}
              </div>
              <div title="Profile">{`
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
                labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
                helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`}
              </div>
              <div title="@fat">{`
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
                craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`}
              </div>
            </Tab>
            <Tab name="rob-nav-tabs2">
              <div title="Home">{`
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate
                nisi qui.`}
              </div>
              <div title="Profile">{`
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
                labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
                helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`}
              </div>
              <div title="@fat">{`
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
                craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`}
              </div>
            </Tab>
            <Tab name="rob-nav-tabs3">
              <div title="Home">{`
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate
                nisi qui.`}
              </div>
              <div title="Profile">{`
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
                labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
                helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`}
              </div>
              <div title="@fat">{`
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
                craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`}
              </div>
            </Tab>
            <Tab name="rob-nav-tabs3">
              <div title="Home" icon="rob-icon-home">{`
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate
                nisi qui.`}
              </div>
              <div title="Profile">{`
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
                labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
                helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`}
              </div>
              <div title="@fat">{`
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
                craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`}
              </div>
            </Tab>
            <Tab name="rob-nav-tabs3" arrow>
              <div title="Home" icon="rob-icon-home">{`
                Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro
                synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher
                retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid.
                Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate
                nisi qui.`}
              </div>
              <div title="Profile">{`
                Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1
                labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft
                beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad
                vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar
                helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes
                anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party
                scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.`}
              </div>
              <div title="@fat">{`
                Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro
                fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone
                skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings
                gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork
                biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl
                craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.`}
              </div>
            </Tab>
          </div>
          <Code>
            {`
 <!--第一种标签页-->
<Tab name="rob-nav-tabs">
    <div title="Home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </div>
    <div title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </div>
    <div title="@fat">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
    </div>
</Tab>
 <!--第二种标签页-->
<Tab name="rob-nav-tabs1">
    <div title="Home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </div>
    <div title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </div>
    <div title="@fat">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
    </div>
</Tab>
<!--第三种标签页-->
<Tab name="rob-nav-tabs2">
    <div title="Home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </div>
    <div title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </div>
    <div title="@fat">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
    </div>
</Tab>
<!--第四种标签页-->
<Tab name="rob-nav-tabs3">
    <div title="Home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </div>
    <div title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </div>
    <div title="@fat">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
    </div>
</Tab>
<!--第五种标签页-->
<Tab name="rob-nav-tabs3">
    <div title="Home" icon="rob-icon-home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </div>
    <div title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </div>
    <div title="@fat">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
    </div>
</Tab>
<!--第六种标签页-->
<Tab name="rob-nav-tabs3" arrow={true}>
    <div title="Home" icon="rob-icon-home">
        Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.
    </div>
    <div title="Profile">
        Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.
    </div>
    <div title="@fat">
        Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.
    </div>
</Tab>`}
          </Code>
        </Container>
        <Other title="一级子组件属性">
          <Description description={propsDescription1} />
        </Other>
      </div>
    )
  }
}
export default TestTab