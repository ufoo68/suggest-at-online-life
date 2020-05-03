import { expect as expectCDK, matchTemplate, MatchStyle } from '@aws-cdk/assert';
import * as cdk from '@aws-cdk/core';
import * as SuggestAtOnlineLife from '../lib/suggest-at-online-life-stack';

test('Empty Stack', () => {
    const app = new cdk.App();
    // WHEN
    const stack = new SuggestAtOnlineLife.SuggestAtOnlineLifeStack(app, 'MyTestStack');
    // THEN
    expectCDK(stack).to(matchTemplate({
      "Resources": {}
    }, MatchStyle.EXACT))
});
