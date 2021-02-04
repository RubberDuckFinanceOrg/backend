"use strict";
function incomeStreamSchema() {
    return {
        type: 'object',
        required: ['income_id', 'streams_id'],
        properties: {
            income_id: {
                type: 'integer',
                minimum: 0
            },
            streams_id: {
                type: 'integer',
                minimum: 0
            }
        }
    };
}
;
module.exports = incomeStreamSchema;
