import React from 'react';
import { Clock } from 'lucide-react';

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-center relative">
        <div className="flex items-center gap-2">
          <Clock className="w-6 h-6 text-indigo-400" />
          <span className="text-xl font-bold text-white">TimeZones+</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;