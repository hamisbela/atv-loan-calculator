import React from 'react';
import { Bike, Info, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-green-600 text-white shadow-lg">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold flex items-center gap-2 mb-4 md:mb-0">
            <Bike className="h-6 w-6" />
            <span>ATV Loan Calculator</span>
          </Link>
          <ul className="flex space-x-6 items-center">
            <li>
              <Link to="/" className="hover:text-green-200 flex items-center gap-1">
                <Bike className="h-4 w-4" />
                Calculator
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-green-200 flex items-center gap-1">
                <Info className="h-4 w-4" />
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-green-200 flex items-center gap-1">
                <Mail className="h-4 w-4" />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}