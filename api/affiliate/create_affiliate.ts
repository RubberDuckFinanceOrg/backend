import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import { Affiliate } from './types'
import validate from '../middleware/json_validator'
import affiliate_schema from './affiliate_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post('/affiliate', authorization, validate({ body: affiliate_schema }), async (req: Request, res: Response) => {
  try {
    const affiliate: Affiliate = await req.body;
    await Create('affiliate', affiliate);
    status.createOk(res, 'affiliate')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
