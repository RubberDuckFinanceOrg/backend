"use strict";
const express_json_validator_middleware_1 = require("express-json-validator-middleware");
const validator = new express_json_validator_middleware_1.Validator({ allErrors: true });
const validate = validator.validate;
module.exports = validate;
