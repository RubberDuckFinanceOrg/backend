"use strict";
function assetSchema() {
    return {
        type: 'object',
        required: [
            'asset_value',
            'asset_name',
            'asset_type',
            'growth_rate',
            'contribution_frequency',
            'contribution_amount',
            'payment_method',
            'next_contribution',
            'tax_status',
            'employee_match',
            'profile_id'
        ],
        properties: {
            asset_value: {
                type: 'number'
            },
            asset_name: {
                type: 'string',
                minLength: 1
            },
            asset_type: {
                type: 'string',
                minLength: 1
            },
            growth_rate: {
                type: 'number',
                minimum: 0
            },
            contribution_frequency: {
                type: 'string',
                minLength: 1
            },
            contribution_amount: {
                type: 'number',
                minimum: 0
            },
            payment_method: {
                type: 'string',
                minLength: 1
            },
            tax_status: {
                type: 'boolean'
            },
            employee_match: {
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
module.exports = assetSchema;
