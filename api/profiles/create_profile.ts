import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import { Profile } from './types'
import validate from '../middleware/json_validator'
import profileSchema from './profile_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post(
  '/profiles',
  authorization,
  validate({ body: profileSchema }),
  async (req: Request, res: Response) => {
    try {
      const profile: Profile = await req.body;
      await Create('profiles', profile);
      status.createOk(res, 'profile')
    } catch (err) {
      status.catchAllError(res, err)
    }
  }
);

export = router;
