type Expense = {
  expense_name: string,
  amount: number,
  frequency: string,
  next_due_date: Date,
  payment_method: string,
  payment_type: string,
  subscription: boolean,
  category: string,
  profile_id: number
}

export = Expense
