import React, { useState } from 'react';
import { Bike, DollarSign } from 'lucide-react';
import ResultsDisplay from './ResultsDisplay';
import { 
  LoanData,
  calculateMonthlyPayment,
  calculateTotalPayment,
  calculateTotalInterest,
  calculateDownPaymentPercentage,
  calculateLoanToValueRatio
} from '../../utils/calculations';

export default function Calculator() {
  const [formData, setFormData] = useState<LoanData>({
    atvPrice: 0,
    downPayment: 0,
    interestRate: 8.99,
    loanTerm: 3,
    extendedWarranty: 0,
    accessories: 0,
    taxes: 0
  });

  const [results, setResults] = useState<{
    monthlyPayment: number;
    totalPayment: number;
    totalInterest: number;
    monthlyWithExtras: number;
    downPaymentPercentage: number;
    loanToValueRatio: number;
  } | null>(null);

  const calculateResults = () => {
    const monthlyPayment = calculateMonthlyPayment(formData);
    const monthlyExtras = (formData.extendedWarranty / (formData.loanTerm * 12)) + 
                         (formData.accessories / (formData.loanTerm * 12)) + 
                         (formData.taxes / (formData.loanTerm * 12));
    const monthlyWithExtras = monthlyPayment + monthlyExtras;
    const totalPayment = calculateTotalPayment(monthlyWithExtras, formData.loanTerm);
    const totalInterest = calculateTotalInterest(totalPayment, formData.atvPrice, formData.downPayment);
    const downPaymentPercentage = calculateDownPaymentPercentage(formData.atvPrice, formData.downPayment);
    const loanToValueRatio = calculateLoanToValueRatio(formData.atvPrice, formData.downPayment);

    setResults({
      monthlyPayment,
      totalPayment,
      totalInterest,
      monthlyWithExtras,
      downPaymentPercentage,
      loanToValueRatio
    });
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-6">
      <div className="flex items-center justify-center mb-6">
        <Bike className="h-8 w-8 text-green-600 mr-2" />
        <h2 className="text-2xl font-bold text-gray-800">ATV Loan Calculator</h2>
      </div>
      
      <div className="space-y-6">
        <div>
          <label htmlFor="atvPrice" className="block text-sm font-medium text-gray-700">
            ATV Price
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="atvPrice"
              value={formData.atvPrice}
              onChange={(e) => setFormData({...formData, atvPrice: parseFloat(e.target.value) || 0})}
              className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="downPayment" className="block text-sm font-medium text-gray-700">
            Down Payment
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="downPayment"
              value={formData.downPayment}
              onChange={(e) => setFormData({...formData, downPayment: parseFloat(e.target.value) || 0})}
              className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="interestRate" className="block text-sm font-medium text-gray-700">
            Interest Rate (%)
          </label>
          <input
            type="number"
            id="interestRate"
            value={formData.interestRate}
            onChange={(e) => setFormData({...formData, interestRate: parseFloat(e.target.value) || 0})}
            className="mt-1 focus:ring-green-500 focus:border-green-500 block w-full sm:text-sm border-gray-300 rounded-md"
            step="0.1"
          />
        </div>

        <div>
          <label htmlFor="loanTerm" className="block text-sm font-medium text-gray-700">
            Loan Term (years)
          </label>
          <select
            id="loanTerm"
            value={formData.loanTerm}
            onChange={(e) => setFormData({...formData, loanTerm: parseInt(e.target.value)})}
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm rounded-md"
          >
            <option value={2}>2 years</option>
            <option value={3}>3 years</option>
            <option value={4}>4 years</option>
            <option value={5}>5 years</option>
          </select>
        </div>

        <div>
          <label htmlFor="extendedWarranty" className="block text-sm font-medium text-gray-700">
            Extended Warranty Cost
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="extendedWarranty"
              value={formData.extendedWarranty}
              onChange={(e) => setFormData({...formData, extendedWarranty: parseFloat(e.target.value) || 0})}
              className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="accessories" className="block text-sm font-medium text-gray-700">
            Accessories Cost
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="accessories"
              value={formData.accessories}
              onChange={(e) => setFormData({...formData, accessories: parseFloat(e.target.value) || 0})}
              className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <div>
          <label htmlFor="taxes" className="block text-sm font-medium text-gray-700">
            Sales Tax and Registration
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="number"
              id="taxes"
              value={formData.taxes}
              onChange={(e) => setFormData({...formData, taxes: parseFloat(e.target.value) || 0})}
              className="focus:ring-green-500 focus:border-green-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
          </div>
        </div>

        <button
          onClick={calculateResults}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
        >
          Calculate Payment
        </button>

        {results && <ResultsDisplay {...results} />}
      </div>
    </div>
  );
}