"use strict";
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
const problemTypes = [
    {
        matchErrorClass: express_json_validator_middleware_1.ValidationError,
        details: {
            type: 'http://localhost:3000/api/',
            title: 'Invalid user object in request body',
            status: 422
        },
        occurrenceDetails(error) {
            return {
                invalid_params: error.validationErrors
            };
        }
    }
];
module.exports = problemTypes;
