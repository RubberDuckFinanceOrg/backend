import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import { Profile } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import profileSchema from './profile_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put(
  '/profile/:id',
  authorization,
  validate({ body: profileSchema }),
  async (req: Request, res: Response) => {
    try {
      const id: string | undefined = req.params.id;
      const newProfile: Profile = await req.body;
      const editProfile = await Edit('profiles', 'id', id, newProfile);
      if (editProfile) {
        status.createOk(res, 'profile')
      } else {
        status.notFound(res, 'profile')
      }
    } catch (err) {
      status.catchAllError(res, err)
    }
  }
);

export = router;
