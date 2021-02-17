"use strict";
function affiliateSchema() {
    return {
        type: 'object',
        required: [
            'profile_id',
            'code'
        ],
        properties: {
            profile_id: {
                type: 'integer',
                minLength: 1
            },
            referrer_id: {
                type: 'string',
                minLength: 1,
                maxLength: 200
            },
            code: {
                type: 'string',
                minLength: 1,
                maxLength: 10
            }
        }
    };
}
;
module.exports = affiliateSchema;
