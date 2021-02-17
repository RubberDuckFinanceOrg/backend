import express, { Request, Response } from 'express'
import { Create } from '../../util/knex_models'
import status from '../../util/response_messages'
import { Asset } from './types'
import validate from '../middleware/json_validator'
import assetSchema from './asset_schema'
import authorization from '../middleware/authorization'
const router = express()

router.post('/assets', authorization, validate({ body: assetSchema }), async (req: Request, res: Response) => {
  try {
    const asset: Asset = await req.body;
    await Create('assets', asset);
    status.createOk(res, 'asset')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
