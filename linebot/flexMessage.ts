import * as Types from '@line/bot-sdk/lib/types'

const flexMessage: Types.FlexCarousel = {
  type: 'carousel',
  contents: [
    {
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: 'hello, world'
          }
        ]
      }
    },
  ]
}