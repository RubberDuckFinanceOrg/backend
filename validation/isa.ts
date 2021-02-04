function isaSchema() {
  return {
    type: 'object',
    required: [
      'income_share_percentage',
      'required_payments',
      'payment_cap',
      'minimum_income',
      'payment_due_date',
      'payment_frequency',
      'payment_method',
      'profile_id'
    ],
    properties: {
      income_share_percentage: {
        type: 'number',
        minimum: 0
      },
      required_payments: {
        type: 'number',
        minimum: 1
      },
      payment_cap: {
        type: 'number',
        minimum: 1
      },
      minimum_income: {
        type: 'string',
        minLength: 0
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
        type: 'integer',
        minimum: 0
      }
    }
  }
};

export = isaSchema
