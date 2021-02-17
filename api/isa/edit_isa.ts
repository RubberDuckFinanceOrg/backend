import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import { Isa } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import isaSchema from './isa_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/isa/:id', authorization, validate({ body: isaSchema }), async (req, res) => {
  try {
    const id: string | undefined = req.params.id;
    const isaData: Isa = await req.body;
    const editIsa = await Edit('isa', 'id', id, isaData);
    status.okOrNotFound('edit', res, editIsa, 'isa')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
