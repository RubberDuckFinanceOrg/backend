import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import Expense from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/expenses/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const bank: Expense[] = await GetOne('expenses', 'id', id);
    status.okOrNotFound('get', res, bank, 'expense')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
