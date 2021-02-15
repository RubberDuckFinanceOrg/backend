import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import { Isa } from './types'
import validate from '../middleware/json_validator'
import isaSchema from './isa_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post('/isa', authorization, validate({ body: isaSchema }), async (req: Request, res: Response) => {
  try {
    const bank: Isa = await req.body;
    await Create('isa', bank);
    status.createOk(res, 'isa')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
