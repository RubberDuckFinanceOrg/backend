type CreditCard = {
  outstanding_credit: number,
  credit_limit: number,
  interest_rate: number,
  minimum_payment: number,
  current_payment: number,
  credit_card_name: string,
  next_due_date: Date,
  payment_frequency: string,
  payment_method: string,
  payment_type: string,
  profile_id: number
}

export = CreditCard
