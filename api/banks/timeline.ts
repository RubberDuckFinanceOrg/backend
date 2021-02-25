import express, { Request, Response } from 'express'
import { GetAll, GetTimeline } from '../../util/knex_models';
import { Bank } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
const router = express()


router.get('/timeline', authorization, async (req: Request, res: Response) => {
  try {
    // const id: string | undefined = req.params.id;
    const id = 'Barclays'
    const income: any[] = await GetTimeline('income', id);
    console.log('income', income)
    status.getOk(res, income)
  } catch (err) {
    status.catchAllError(res, err)
  }
});

export = router;
