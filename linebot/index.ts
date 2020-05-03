import * as Lambda from 'aws-lambda'
import * as Line from '@line/bot-sdk'
import * as Types from '@line/bot-sdk/lib/types'
import { buildReplyText } from 'line-message-builder'
import AWSAppSyncClient from 'aws-appsync'
import { query, Result, getCategory } from './graphql'
import { flexMessage } from './flexMessage'
import 'isomorphic-fetch'

const channelAccessToken = process.env.ACCESS_TOKEN!
const channelSecret = process.env.CHANNEL_SECRET!

const config: Line.ClientConfig = {
  channelAccessToken,
  channelSecret,
}
const client = new Line.Client(config)

const appSyncClient = new AWSAppSyncClient({
  url: process.env.URL!,
  region: process.env.REGION!,
  auth: {
    type: 'API_KEY',
    apiKey: process.env.API_KEY!,
  },
  disableOffline: true,
})

async function eventHandler(event: Types.MessageEvent): Promise<any> {
  if (event.type !== 'message' || event.message.type !== 'text') {
    return client.replyMessage(event.replyToken, buildReplyText('対応していないメッセージです'))
  }

  try {
    const result = await appSyncClient.query<Result>({
      fetchPolicy: "network-only",
      query: query(getCategory(event.message.text)),
    })

    const message = flexMessage(result.data.getAquarium ?? result.data.getOnsen ?? result.data.getShrime ?? [])

    return client.replyMessage(event.replyToken, {
      type: 'flex',
      altText: 'オンライン施設',
      contents: message,
    })

  } catch (e) {
    console.log(e)
    return client.replyMessage(event.replyToken, buildReplyText('対応していないメッセージです'))
  }
}

export const handler: Lambda.APIGatewayProxyHandler = async (proxyEevent: Lambda.APIGatewayEvent, _context) => {

  const body: Line.WebhookRequestBody = JSON.parse(proxyEevent.body!)
  await Promise
    .all(body.events.map(async event => eventHandler(event as Types.MessageEvent)))
    .catch(err => {
      console.error(err.Message)
      return {
        statusCode: 500,
        body: 'Error'
      }
    })
  return {
    statusCode: 200,
    body: 'OK'
  }
}
