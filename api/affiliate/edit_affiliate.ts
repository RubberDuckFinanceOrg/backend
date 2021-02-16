import express, { Request, Response } from 'express'
import { Edit, recordCheck } from '../../util/knex_models';
import { Affiliate } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import affiliate_schema from './affiliate_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/affiliate/:id', authorization, validate({ body: affiliate_schema }), async (req, res) => {
  try {
    const id: string | undefined = req.params.id;
    const affiliateData: Affiliate = await req.body;
    // check to see if user has submitted unique affiliate code
    const valueExists = await recordCheck('affiliate', affiliateData.code);
    if (valueExists) {
      return status.conflict(res, 'Affiliate code')
    }
    const editAffiliate = await Edit('affiliate', 'id', id, affiliateData);
    status.okOrNotFound('edit', res, editAffiliate, 'affiliate')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
