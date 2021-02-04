"use strict";
function assetsTypesSchema() {
    return {
        type: 'object',
        required: ['asset_id', 'type_id'],
        properties: {
            asset_id: {
                type: 'integer',
                minimum: 0
            },
            type_id: {
                type: 'integer',
                minimum: 0
            }
        }
    };
}
;
module.exports = assetsTypesSchema;
