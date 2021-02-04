"use strict";
function expensesCategoriesSchema() {
    return {
        type: 'object',
        required: ['expense_id', 'category_id'],
        properties: {
            expense_id: {
                type: 'integer',
                minimum: 0
            },
            category_id: {
                type: 'integer',
                minimum: 0
            }
        }
    };
}
;
module.exports = expensesCategoriesSchema;
