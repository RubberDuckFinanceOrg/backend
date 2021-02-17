import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import creditSchema from './credit_cards_schema'
import CreditCard from './types'
import validate from '../middleware/json_validator'
import authorization from '../middleware/authorization'
const router = express()

router.post('/creditCards', authorization, validate({ body: creditSchema }), async (req: Request, res: Response) => {
  try {
    const creditCard: CreditCard = await req.body;
    await Create('credit_cards', creditCard);
    status.createOk(res, 'credit card')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
