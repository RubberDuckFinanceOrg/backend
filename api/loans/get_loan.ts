import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import Loan from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/loan/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const loan: Loan[] = await GetOne('loan', 'id', id);
    status.okOrNotFound('get', res, loan, 'loan')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
