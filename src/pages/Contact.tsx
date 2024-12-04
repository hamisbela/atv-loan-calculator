import React, { useState } from 'react';
import { Mail, Phone, MapPin, Bike, MessageSquare } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 bg-green-600 text-white">
              <div className="flex items-center gap-2 mb-6">
                <Bike className="h-6 w-6" />
                <h2 className="text-2xl font-bold">Get in Touch</h2>
              </div>
              
              <p className="mb-8 text-green-100">
                Have questions about ATV financing? Need help with calculations? Our team of powersports financing experts is here to help!
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-green-200" />
                  <span>support@atvloancalculator.com</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-green-200" />
                  <span>1-800-ATV-LOAN (288-5626)</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-green-200" />
                  <span>123 Powersports Way, Adventure City, AC 12345</span>
                </div>

                <div className="pt-6 mt-6 border-t border-green-500">
                  <h3 className="font-semibold mb-2">Business Hours</h3>
                  <p className="text-green-100">Monday - Friday: 9:00 AM - 6:00 PM EST</p>
                  <p className="text-green-100">Saturday: 10:00 AM - 4:00 PM EST</p>
                  <p className="text-green-100">Sunday: Closed</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="h-6 w-6 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <select
                    id="subject"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="financing">ATV Financing Questions</option>
                    <option value="calculator">Calculator Help</option>
                    <option value="rates">Interest Rates</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                    required
                    placeholder="How can we help you with your ATV financing needs?"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}