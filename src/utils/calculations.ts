export interface LoanData {
  atvPrice: number;
  downPayment: number;
  interestRate: number;
  loanTerm: number;
  extendedWarranty: number;
  accessories: number;
  taxes: number;
}

export function calculateMonthlyPayment(data: LoanData): number {
  const totalCost = data.atvPrice + data.extendedWarranty + data.accessories + data.taxes;
  const loanAmount = totalCost - data.downPayment;
  const monthlyRate = data.interestRate / 100 / 12;
  const numberOfPayments = data.loanTerm * 12;

  const monthlyPayment =
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
    (Math.pow(1 + monthlyRate, numberOfPayments) - 1);

  return monthlyPayment;
}

export function calculateTotalPayment(monthlyPayment: number, loanTerm: number): number {
  return monthlyPayment * loanTerm * 12;
}

export function calculateTotalInterest(totalPayment: number, atvPrice: number, downPayment: number): number {
  return totalPayment - (atvPrice - downPayment);
}

export function calculateDownPaymentPercentage(atvPrice: number, downPayment: number): number {
  return (downPayment / atvPrice) * 100;
}

export function calculateLoanToValueRatio(atvPrice: number, downPayment: number): number {
  return ((atvPrice - downPayment) / atvPrice) * 100;
}