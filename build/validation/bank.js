"use strict";
function bankSchema() {
    return {
        type: 'object',
        required: [
            'profile_id',
            'bank_name',
            'checking_account_balance',
            'checking_account_interest_rate',
            'savings_account_balance',
            'savings_account_interest_rate'
        ],
        properties: {
            profile_id: {
                type: 'integer',
                minLength: 1
            },
            bank_name: {
                type: 'string',
                minLength: 1,
                maxLength: 200
            },
            checking_account_balance: {
                type: 'number'
            },
            checking_account_interest_rate: {
                type: 'number'
            },
            savings_account_balance: {
                type: 'number'
            },
            savings_account_interest_rate: {
                type: 'number'
            }
        }
    };
}
;
module.exports = bankSchema;
