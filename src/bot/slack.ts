import {App} from '@slack/bolt'
import {safeEval} from 'utils/safe-eval'
import {Tasks} from 'db'
import {Task} from 'db/tables/tasks'

import {debug} from 'utils/logs'

const {SLACK_BOT_TOKEN, SLACK_SIGNING_SECRET} = process.env

export const bot = new App({
  signingSecret: SLACK_SIGNING_SECRET,
  token: SLACK_BOT_TOKEN,
})


