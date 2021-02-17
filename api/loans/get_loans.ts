import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import Loan from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/loan/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const loan: Loan[] = await GetAll('loans', 'profile_id', id);
    status.getOk(res, loan)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
