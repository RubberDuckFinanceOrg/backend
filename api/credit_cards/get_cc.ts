import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import CreditCard from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/creditCards/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const creditCard: CreditCard[] = await GetOne('credit_cards', 'id', id);
    status.okOrNotFound('get', res, creditCard, 'credit card')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
