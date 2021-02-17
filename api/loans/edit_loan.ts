import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import Loan from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import loanSchema from './loan_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/loans/:id', authorization, validate({ body: loanSchema }), async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const newLoan: Loan = await req.body;
    const editLoan = await Edit('loans', 'id', id, newLoan);
    await status.okOrNotFound('edit', res, editLoan, 'loan')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
