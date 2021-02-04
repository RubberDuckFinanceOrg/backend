import express, { Request, Response } from 'express'
import { GetOne } from '../../util/knex_models'
import status from '../../util/response_messages'
import bcrypt from 'bcryptjs'
import generateToken from '../token/generate_token'
import { User } from './types'
import validate from '../middleware/json_validator'
import userSchema from './user_schema'
const router = express()

router.post('/login', validate({ body: userSchema }), async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: User = await req.body;
    const user: User = await GetOne('users', 'email', email).first();
    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);
      if (token) {
        status.getOk(res, token)
      }
    } else {
      status.unauthorized(res, 'invalid email or password')
    }
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router
