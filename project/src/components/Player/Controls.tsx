import React from 'react';
import { Play, SkipBack, SkipForward, Repeat, Shuffle } from 'lucide-react';

const Controls = () => {
  return (
    <div className="flex flex-col items-center w-1/3">
      <div className="flex items-center gap-6">
        <button className="text-gray-400 hover:text-white">
          <Shuffle className="w-4 h-4" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <SkipBack className="w-5 h-5" />
        </button>
        <button className="bg-white rounded-full p-2 hover:scale-105 transition">
          <Play className="w-5 h-5 text-black" fill="black" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <SkipForward className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-white">
          <Repeat className="w-4 h-4" />
        </button>
      </div>
      <ProgressBar />
    </div>
  );
};

const ProgressBar = () => {
  return (
    <div className="w-full mt-2 flex items-center gap-2">
      <span className="text-xs text-gray-400">0:00</span>
      <div className="h-1 flex-1 bg-gray-800 rounded-full">
        <div className="h-1 w-1/3 bg-white rounded-full"></div>
      </div>
      <span className="text-xs text-gray-400">3:45</span>
    </div>
  );
};

export default Controls;