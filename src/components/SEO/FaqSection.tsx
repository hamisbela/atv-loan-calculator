import React from 'react';
import { HelpCircle } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string | string[];
}

const faqs: FaqItem[] = [
  {
    question: "What factors affect ATV loan payments?",
    answer: "ATV loan payments are influenced by several factors including the ATV price, down payment amount, interest rate, loan term, additional accessories, extended warranty costs, and applicable taxes and fees."
  },
  {
    question: "What are typical ATV loan terms?",
    answer: [
      "• 2-5 year loan terms available",
      "• Lower monthly payments with longer terms",
      "• Higher interest rates than auto loans",
      "• Flexible down payment options",
      "• Various financing sources available"
    ]
  },
  {
    question: "Should I include accessories in my ATV loan?",
    answer: "Including accessories in your ATV loan can make them more affordable through monthly payments, but remember that you'll pay interest on these additions. Consider essential accessories like safety gear, storage, and protection equipment when calculating your loan amount."
  },
  {
    question: "Is an extended warranty worth including in the loan?",
    answer: "An extended warranty can provide valuable protection for your ATV investment. While including it in your loan increases the total cost due to interest, it makes the warranty more affordable through monthly payments. Consider your riding habits, mechanical skills, and risk tolerance when deciding."
  }
];

export default function FaqSection() {
  return (
    <div className="bg-gray-50 rounded-xl p-8 mt-12">
      <div className="flex items-center gap-3 mb-8">
        <HelpCircle className="h-8 w-8 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
            {Array.isArray(faq.answer) ? (
              <ul className="space-y-2 text-gray-600">
                {faq.answer.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}