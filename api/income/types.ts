type Income = {
  id: string,
  pre_tax_income: number,
  post_tax_income: number
  income_source: string,
  isa_income: boolean,
  bank_name: string,
  account_name: string,
  payment_frequency: string,
  next_pay_day: Date,
  profile_id: number
}

export = Income
