function userSchema() {
  return {
    type: 'object',
    required: ['email', 'password'],
    properties: {
      email: { type: 'string', minLength: 1, format: 'email', maxLength: 200 },
      password: {
        type: 'string',
        minLength: 1,
        maxLength: 40
      },
      referral_id: {
        type: 'string',
        minLength: 1,
        maxLength: 10
      }
    }
  };
}

export = userSchema
