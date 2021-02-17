import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import { Bank } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import bankSchema from './bank_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/banks/:id', authorization, validate({ body: bankSchema }), async (req, res) => {
  try {
    const id: string | undefined = req.params.id;
    const bankData: Bank = await req.body;
    const editBank = await Edit('banks', 'id', id, bankData);
    status.okOrNotFound('edit', res, editBank, 'bank')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
