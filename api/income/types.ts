type Income = {
  asset_value: number,
  asset_name: string,
  asset_type: string,
  growth_rate: number,
  contribution_frequency: string,
  contribution_amount: number,
  next_contribution: Date,
  payment_method: string,
  payment_type: string,
  pre_tax: boolean,
  employee_match: boolean,
  profile_id: number
}

export = Income

