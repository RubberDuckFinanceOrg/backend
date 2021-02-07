import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import { Bank } from './types'
import validate from '../middleware/json_validator'
import bankSchema from './bank_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post('/banks', authorization, validate({ body: bankSchema }), async (req: Request, res: Response) => {
  try {
    const bank: Bank = await req.body;
    await Create('banks', bank);
    status.createOk(res, 'bank')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
