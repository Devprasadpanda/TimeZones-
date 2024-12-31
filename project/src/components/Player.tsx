import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Repeat, Shuffle } from 'lucide-react';

const Player = () => {
  return (
    <div className="bg-black border-t border-gray-800 p-4 flex items-center justify-between">
      <div className="flex items-center gap-4 w-1/3">
        <img 
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=150&h=150&fit=crop" 
          alt="Album Cover" 
          className="w-14 h-14 rounded"
        />
        <div>
          <p className="text-white text-sm">Song Title</p>
          <p className="text-gray-400 text-xs">Artist Name</p>
        </div>
      </div>

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
        <div className="w-full mt-2 flex items-center gap-2">
          <span className="text-xs text-gray-400">0:00</span>
          <div className="h-1 flex-1 bg-gray-800 rounded-full">
            <div className="h-1 w-1/3 bg-white rounded-full"></div>
          </div>
          <span className="text-xs text-gray-400">3:45</span>
        </div>
      </div>

      <div className="flex items-center gap-2 w-1/3 justify-end">
        <Volume2 className="text-gray-400 w-4 h-4" />
        <div className="w-24 h-1 bg-gray-800 rounded-full">
          <div className="h-1 w-2/3 bg-white rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Player;