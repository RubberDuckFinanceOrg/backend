import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import Expense from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/expenses/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const expense: Expense[] = await GetAll('expenses', 'profile_id', id);
    status.getOk(res, expense)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
