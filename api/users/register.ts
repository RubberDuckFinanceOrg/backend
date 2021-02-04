import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import bcrypt from 'bcryptjs'
import { User } from './types'
import validate from '../middleware/json_validator'
import userSchema from './user_schema'
import { v4 as uuidv4 } from 'uuid';


const router = express()

router.post('/register', validate({ body: userSchema }), async (req: Request, res: Response): Promise<void> => {
  try {
    const credentials: User = await req.body;
    const hash: string = bcrypt.hashSync(credentials.password, 12);
    const referrer_id = uuidv4()
    credentials.referrer_id = referrer_id
    credentials.password = hash;

    await Create('users', credentials);
    status.createOk(res, 'user')
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
