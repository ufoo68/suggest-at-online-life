import * as Types from '@line/bot-sdk/lib/types'
import { Amusument } from './graphql'

export const flexMessage = (amusements: Amusument[]): Types.FlexCarousel => ({
  type: 'carousel',
  contents: amusements.map(
    amusement => ({
      type: 'bubble',
      body: {
        type: 'box',
        layout: 'vertical',
        contents: [
          {
            type: 'text',
            text: `${amusement.title}`,
          },
          {
            type: 'text',
            text: `${amusement.url}`,
          },
        ]
      }
    })
  )
})