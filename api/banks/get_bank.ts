import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import { Bank } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/bank/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const bank: Bank[] = await GetOne('banks', 'id', id);
    status.okOrNotFound('get', res, bank, 'bank')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
