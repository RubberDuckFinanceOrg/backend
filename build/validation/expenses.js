"use strict";
function expenseSchema() {
    return {
        type: 'object',
        required: [
            'expense_name',
            'amount',
            'frequency',
            'next_due_date',
            'payment_method',
            'profile_id'
        ],
        properties: {
            expense_name: {
                type: 'string',
                minLength: 1
            },
            amount: {
                type: 'number',
                minimum: 1
            },
            frequency: {
                type: 'string',
                minLength: 1
            },
            payment_method: {
                type: 'string',
                minLength: 1
            },
            profile_id: {
                type: 'integer',
                minimum: 0
            }
        }
    };
}
;
module.exports = expenseSchema;
