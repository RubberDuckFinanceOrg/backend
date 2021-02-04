import express, { Request, Response } from 'express'
import { GetAll } from '../../util/knex_models';
import { Profile } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/profiles/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const profiles: Profile[] = await GetAll('profiles', 'user_id', id);
    status.getOk(res, profiles)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
