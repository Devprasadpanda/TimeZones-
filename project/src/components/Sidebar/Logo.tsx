import React from 'react';
import { Music } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 mb-8">
      <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
        <Music className="w-5 h-5 text-black" />
      </div>
      <span className="text-white text-xl font-bold">Musicify</span>
    </div>
  );
};

export default Logo;