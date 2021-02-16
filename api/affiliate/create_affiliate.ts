import express, { Request, Response } from 'express'
import { Create, recordCheck } from '../../util/knex_models'
import status from '../../util/response_messages'
import { Affiliate } from './types'
import validate from '../middleware/json_validator'
import affiliate_schema from './affiliate_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post('/affiliate', authorization, validate({ body: affiliate_schema }), async (req: Request, res: Response) => {
  try {
    const affiliate: Affiliate = await req.body;
    // check to see if user has submitted unique affiliate code
    const valueExists = await recordCheck('affiliate', affiliate.code);
    if (valueExists) {
      return status.conflict(res, 'Affiliate code')
    }
    await Create('affiliate', affiliate);
    status.createOk(res, 'affiliate')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
