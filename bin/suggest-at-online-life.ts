#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from '@aws-cdk/core';
import { SuggestAtOnlineLifeStack } from '../lib/suggest-at-online-life-stack';

const app = new cdk.App();
new SuggestAtOnlineLifeStack(app, 'SuggestAtOnlineLifeStack');
