import { Validator } from 'express-json-validator-middleware'

const validator = new Validator({ allErrors: true });
const validate = validator.validate;
export = validate
