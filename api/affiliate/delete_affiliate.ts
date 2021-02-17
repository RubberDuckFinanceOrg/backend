import express, { Request, Response } from 'express'
import { Delete } from '../../util/knex_models';
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.delete('/affiliate/:id', authorization, async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const deleted = await Delete('affiliate', 'id', id);
    status.okOrNotFound('delete', res, deleted, 'affiliate')
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
