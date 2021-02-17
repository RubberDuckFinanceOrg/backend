import express, { Request, Response } from 'express';
import { Create } from '../../util/knex_models';
import authorization from '../middleware/authorization';
import Income from './types';
import validate from '../middleware/json_validator';
import loanSchema from "./loan_schema";
import status from '../../util/response_messages';

const router = express();

router.post('/loans', authorization, validate({ body: loanSchema }), async (req: Request, res: Response) => {
  try {
    const loans: Income = await req.body
    await Create('loans', loans)
    status.createOk(res, 'loans');
  } catch (err) {
    status.catchAllError(res, err)
  }

})

export = router;
