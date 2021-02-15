import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models';
import { Affiliate } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.get('/affiliate/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string = req.params.id;
    const affiliate: Affiliate[] = await GetOne('affiliate', 'id', id);
    status.okOrNotFound('get', res, affiliate, 'affiliate')
  } catch (err) {
    status.catchAllError(res, err);
  }
});

export = router;
