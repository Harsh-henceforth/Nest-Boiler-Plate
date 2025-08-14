import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold">
          MyApp
        </Link>

        <nav className="space-x-6">
          <Link href="/" className="hover:text-gray-400 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-gray-400 transition">
            About
          </Link>
          <Link href="/contact" className="hover:text-gray-400 transition">
            Contact
          </Link>
        </nav>

        <Button className="bg-blue-600 hover:bg-blue-700 text-white transition">
          Get Started
        </Button>
      </div>
    </header>
  );
};

export default Header;
