import * as cdk from '@aws-cdk/core'
import { LambdaApi } from 'cdk-lambda-api'

export class SuggestAtOnlineLifeStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new LambdaApi(this, 'LineBot', {
      lambdaPath: 'linebot',
      environment: {
        ACCESS_TOKEN: process.env.ACCESS_TOKEN!,
        CHANNEL_SECRET: process.env.CHANNEL_SECRET!,
      }
    })
  }
}
