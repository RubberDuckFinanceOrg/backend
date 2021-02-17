import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import creditSchema from './credit_cards_schema'
import CreditCard from './types'
import validate from '../middleware/json_validator'
import creditCardsSchema from './credit_cards_schema';
const router = express()


router.put('/creditCards/:id', authorization, validate({ body: creditSchema }), async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const creditData: CreditCard = await req.body;
    const editCreditCard = await Edit('credit_cards', 'id', id, creditData);
    status.okOrNotFound('edit', res, editCreditCard, 'credit card')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
