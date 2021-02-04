function loansTagsSchema() {
  return {
    type: 'object',
    required: ['loan_id', 'tag_id'],
    properties: {
      loan_id: {
        type: 'integer',
        minimum: 0
      },
      tag_id: {
        type: 'integer',
        minimum: 0
      }
    }
  }
};
export = loansTagsSchema
