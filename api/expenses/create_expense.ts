import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import Expense from './types'
import validate from '../middleware/json_validator'
import expenseSchema from './expense_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post('/expenses', authorization, validate({ body: expenseSchema }), async (req: Request, res: Response) => {
  try {
    const expense: Expense = await req.body;
    await Create('expenses', expense);
    status.createOk(res, 'expense')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
