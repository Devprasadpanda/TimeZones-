import React from 'react';
import { Home, Search, Library } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="space-y-4">
      <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
        <Home className="w-6 h-6" />
        <span>Home</span>
      </a>
      <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
        <Search className="w-6 h-6" />
        <span>Search</span>
      </a>
      <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
        <Library className="w-6 h-6" />
        <span>Your Library</span>
      </a>
    </nav>
  );
};

export default Navigation;