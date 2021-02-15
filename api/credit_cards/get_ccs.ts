import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import CreditCard from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/creditCards/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const creditCard: CreditCard[] = await GetAll('credit_cards', 'profile_id', id);
    status.getOk(res, creditCard)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
