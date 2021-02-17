import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import Income from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/income/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const income: Income[] = await GetAll('income', 'profile_id', id);
    status.getOk(res, income)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
