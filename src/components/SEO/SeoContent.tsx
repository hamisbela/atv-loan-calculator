import React from 'react';
import { Bike, DollarSign, Calculator, BarChart3 } from 'lucide-react';
import FeatureCard from './FeatureCard';
import FaqSection from './FaqSection';

export default function SeoContent() {
  const features = [
    {
      icon: Bike,
      title: "ATV Loan Analysis",
      description: "Calculate your monthly payments for ATV financing with our specialized calculator."
    },
    {
      icon: DollarSign,
      title: "Total Cost Breakdown",
      description: "Understand the full cost of ATV ownership including accessories, warranty, and taxes."
    },
    {
      icon: Calculator,
      title: "Payment Options",
      description: "Compare different loan terms and down payment options to find the best fit."
    },
    {
      icon: BarChart3,
      title: "Cost Comparison",
      description: "Analyze various financing scenarios to make an informed ATV purchase decision."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding ATV Financing</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Our ATV loan calculator helps you analyze financing options, comparing monthly payments and total costs to make informed decisions about your ATV purchase.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-xl p-8 text-white mb-12">
        <h3 className="text-2xl font-bold mb-4">Benefits of ATV Loan Calculator</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-semibold mb-2">Comprehensive Cost Analysis</h4>
            <ul className="space-y-2">
              <li>• Calculate total ownership costs</li>
              <li>• Include accessories and warranty</li>
              <li>• Factor in taxes and fees</li>
              <li>• Compare different loan terms</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Smart Planning Tools</h4>
            <ul className="space-y-2">
              <li>• Optimize down payment</li>
              <li>• Evaluate loan terms</li>
              <li>• Plan monthly budget</li>
              <li>• Make informed decisions</li>
            </ul>
          </div>
        </div>
      </div>

      <FaqSection />
    </div>
  );
}