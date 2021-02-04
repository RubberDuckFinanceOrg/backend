import express, { Request, Response } from 'express'
import { Users } from '../../util/knex_models'
import { User } from './types'
import status from '../../util/response_messages'

const router = express()

router.get('/users', async (req: Request, res: Response) => {
  try {
    const users: User[] = await Users();
    status.getOk(res, users)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
