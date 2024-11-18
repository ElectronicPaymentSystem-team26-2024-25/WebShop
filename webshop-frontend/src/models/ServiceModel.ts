export interface BillingOption {
  id: string;
  label: string;
  price: number;
}

export interface Service {
  name: string;
  description: string[];
  plan: string;
  billingOptions: BillingOption[];
}
