import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import { Isa } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/isa/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const isa: Isa[] = await GetOne('isa', 'id', id);
    status.okOrNotFound('get', res, isa, 'isa')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
