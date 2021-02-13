import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import Income from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/income/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const income: Income[] = await GetOne('income', 'id', id);
    status.okOrNotFound('get', res, income, 'income')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
