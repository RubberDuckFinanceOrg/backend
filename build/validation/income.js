"use strict";
function incomeSchema() {
    return {
        type: 'object',
        required: [
            'pre_tax_income',
            'post_tax_income',
            'income_source',
            'direct_deposit_account',
            'payment_frequency',
            'next_pay_day',
            'profile_id'
        ],
        properties: {
            pre_tax_income: {
                type: 'number',
                minimum: 1
            },
            post_tax_income: {
                type: 'number',
                minimum: 1
            },
            income_source: {
                type: 'string',
                minLength: 1
            },
            direct_deposit_account: {
                type: 'string',
                minLength: 0
            },
            payment_frequency: {
                type: 'string',
                minLength: 1
            },
            isa_income: {
                type: 'boolean'
            },
            profile_id: {
                type: 'integer',
                minimum: 0
            }
        }
    };
}
;
module.exports = incomeSchema;
