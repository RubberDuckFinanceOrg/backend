import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import Income from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import incomeSchema from './income_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/income/:id', authorization, validate({ body: incomeSchema }), async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const newIncome: Income = await req.body;
    const editIncome = await Edit('income', 'id', id, newIncome);
    await status.okOrNotFound('edit', res, editIncome, 'income')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
