import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import { Asset } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/assets/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const asset: Asset[] = await GetAll('assets', 'profile_id', id);
    status.getOk(res, asset)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
