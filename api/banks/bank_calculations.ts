import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import { Bank } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/banks/:id/calculations', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const bank: Bank[] = await GetAll('banks', 'profile_id', id);
    status.getOk(res, bank)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
