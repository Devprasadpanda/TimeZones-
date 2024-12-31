import React from 'react';
import { Volume2 } from 'lucide-react';

const VolumeControl = () => {
  return (
    <div className="flex items-center gap-2 w-1/3 justify-end">
      <Volume2 className="text-gray-400 w-4 h-4" />
      <div className="w-24 h-1 bg-gray-800 rounded-full">
        <div className="h-1 w-2/3 bg-white rounded-full"></div>
      </div>
    </div>
  );
};

export default VolumeControl;