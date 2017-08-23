import React, { PureComponent } from 'react'
import Image from 'robot-ui/Image'

export default class ImageExample extends PureComponent {
  render() {
    const images = [
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?amdin=1',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=2',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=3',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=4',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=5',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=6',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=7',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=8',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=9',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=10',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=11',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=12',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=13',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=14',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=15',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=16',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=17',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=18',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=19',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=20',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=21',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=22',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=23',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=24',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=25',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=26',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=27',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=28',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=29',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=30',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=31',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=32',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=33',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=34',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=35',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=36',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=37',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=38',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=39',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=40',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=41',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=42',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=43',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=44',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=45',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=46',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=47',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=48',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=49',
      'http://wx2.sinaimg.cn/mw690/005RfIqdly1fgmuwevtirj30sg0sgk0m.jpg?admin=50'
    ]

    return (
      <div>
        <Image images={images} />
      </div>
    )
  }
}