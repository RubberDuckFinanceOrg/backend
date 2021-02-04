import { ValidationError } from 'express-json-validator-middleware'

const problemTypes = [
  {
    matchErrorClass: ValidationError,
    details: {
      type: 'http://localhost:3000/api/',
      title: 'Invalid user object in request body',
      status: 422
    },
    occurrenceDetails(error: { [output: string]: {} }) {
      return {
        invalid_params: error.validationErrors
      };
    }
  }
];

export = problemTypes
