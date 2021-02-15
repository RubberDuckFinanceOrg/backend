import express, { Request, Response } from 'express'
import { Edit } from '../../util/knex_models';
import { Asset } from './types'
import status from '../../util/response_messages'
import authorization from '../middleware/authorization';
import assetSchema from './asset_schema'
import validate from '../middleware/json_validator'
const router = express()


router.put('/assets/:id', authorization, validate({ body: assetSchema }), async (req, res) => {
  try {
    const id: string | undefined = req.params.id;
    const assetData: Asset = await req.body;
    const editAsset = await Edit('assets', 'id', id, assetData);
    status.okOrNotFound('edit', res, editAsset, 'asset')
  } catch (err) {
    status.catchAllError(res, err)
  }
}
);

export = router;
