import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import { Isa } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/isa/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const isa: Isa[] = await GetAll('isa', 'profile_id', id);
    status.getOk(res, isa)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
