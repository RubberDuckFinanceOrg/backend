function transferSchema() {
  return {
    type: 'object',
    required: [
      'from_account',
      'to_account',
      'frequency',
      'next_transfer',
      'transfer_amount',
      'bank_id'
    ],
    properties: {
      from_account: {
        type: 'string',
        minLength: 1
      },
      to_account: {
        type: 'string',
        minLength: 1
      },
      transfer_amount: {
        type: 'number',
        minimum: 1
      },
      bank_id: {
        type: 'integer',
        minimum: 0
      }
    }
  }
};

export = transferSchema
