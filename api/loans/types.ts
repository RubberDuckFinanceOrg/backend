type Loan = {
  original_loan_amount: number,
  outstanding_loan_amount: number,
  interest_rate: number,
  minimum_payment: number,
  current_payment: number,
  loan_name: string,
  loan_type: string,
  next_due_date: Date,
  payment_frequency: string,
  payment_method: string,
  payment_type: string,
  profile_id: string
}

export = Loan
