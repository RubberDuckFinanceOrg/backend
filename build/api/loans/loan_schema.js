"use strict";
function loanSchema() {
    return {
        type: 'object',
        required: [
            'original_loan_amount',
            'outstanding_loan_amount',
            'interest_rate',
            'minimum_payment',
            'current_payment',
            'loan_name',
            'payment_frequency',
            'payment_method',
            'profile_id'
        ],
        properties: {
            original_loan_amount: {
                type: 'number',
                minimum: 1
            },
            outstanding_loan_amount: {
                type: 'number',
                minimum: 1
            },
            interest_rate: {
                type: 'number'
            },
            minimum_payment: {
                type: 'number',
                minimum: 0
            },
            current_payment: {
                type: 'number',
                minimum: 0
            },
            loan_name: {
                type: 'string',
                minLength: 1
            },
            payment_frequency: {
                type: 'string',
                minLength: 1
            },
            payment_method: {
                type: 'string',
                minLength: 1
            },
            profile_id: {
                type: 'integer'
            }
        }
    };
}
;
module.exports = loanSchema;
