function creditCardsSchema() {
  return {
    type: 'object',
    required: [
      'outstanding_credit',
      'credit_limit',
      'interest_rate',
      'minimum_payment',
      'current_payment',
      'credit_card_name',
      'payment_frequency',
      'payment_method',
      'profile_id'
    ],
    properties: {
      outstanding_credit: {
        type: 'number',
        minimum: 1
      },
      credit_limit: {
        type: 'number',
        minimum: 1
      },
      interest_rate: {
        type: 'number'
      },
      minimum_payment: {
        type: 'number',
        minimum: 0
      },
      current_payment: {
        type: 'number',
        minimum: 0
      },
      credit_card_name: {
        type: 'string',
        minLength: 1
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
        type: 'integer'
      }
    }
  }
};
export =  creditCardsSchema
