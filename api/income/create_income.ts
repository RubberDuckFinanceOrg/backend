import express, { Request, Response } from 'express';
import { Create } from '../../util/knex_models';
import authorization from '../middleware/authorization';
import Income from './types';
import validate from '../middleware/json_validator';
import incomeSchema from "./income_schema";
import status from '../../util/response_messages';

const router = express();

router.post('/income', authorization, validate({ body: incomeSchema }), async (req: Request, res: Response) => {
  try {
    const income: Income = await req.body
    await Create('income', income)
    status.createOk(res, 'income');
  } catch (err) {
    status.catchAllError(res, err)
  }

})

export = router;
