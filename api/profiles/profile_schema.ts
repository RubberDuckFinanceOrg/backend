function profileSchema() {
  return {
    type: 'object',
    required: ['first_name', 'last_name', 'currency'],
    properties: {
      first_name: {
        type: 'string',
        minLength: 1,
        maxLength: 100
      },
      last_name: {
        type: 'string',
        minLength: 1,
        maxLength: 100
      },
      credit_score: {
        type: 'string',
        minLength: 1,
        maxLength: 4
      },
      currency: {
        type: 'string',
        minLength: 1,
        maxLength: 2
      },
      user_id: {
        type: 'integer'
      }
    }
  }
};
export = profileSchema;
