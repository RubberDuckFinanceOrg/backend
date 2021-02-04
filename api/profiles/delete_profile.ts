import express, { Request, Response } from 'express'
import { Delete } from '../../util/knex_models';
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()

router.delete('/profile/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id: string | undefined = req.params.id;
    const deleted = await Delete('profiles', 'id', id);
    if (deleted) {
      status.deleteOk(res, 'profile')
    } else {
      status.notFound(res, 'profile')
    }
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
