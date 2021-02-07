// const express = require('express');
// const { GetOne } = require('../../util/knex_models');
// const handleError = require('../../util/handle_error');
// const authorization = require('../middleware/authorization');
// const router = express();

import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import { Profile } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/profile/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const profile: Profile[] = await GetOne('profiles', 'id', id);
    console.log('profile', typeof profile, profile)
    status.okOrNotFound('get', res, profile, 'profile')
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
