import React from 'react';

const NowPlaying = () => {
  return (
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
  );
};

export default NowPlaying;