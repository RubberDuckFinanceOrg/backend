import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import { Affiliate } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/affiliate/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const affiliate: Affiliate[] = await GetAll('affiliate', 'profile_id', id);
    status.getOk(res, affiliate)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
