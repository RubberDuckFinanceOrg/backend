import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import Expense from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import expenseSchema from './expense_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/expenses/:id', authorization, validate({ body: expenseSchema }), async (req, res) => {
  try {
    const id: string | undefined = req.params.id;
    const expenseData: Expense = await req.body;
    const editExpense = await Edit('expenses', 'id', id, expenseData);
    status.okOrNotFound('edit', res, editExpense, 'expense')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
