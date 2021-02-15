import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import { Asset } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/assets/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const asset: Asset[] = await GetOne('assets', 'id', id);
    status.okOrNotFound('get', res, asset, 'asset')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
