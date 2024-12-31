import React from 'react';
import { PlusSquare, Heart } from 'lucide-react';

const Playlists = () => {
  return (
    <>
      <div className="mt-8 space-y-4">
        <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
          <PlusSquare className="w-6 h-6" />
          <span>Create Playlist</span>
        </a>
        <a href="#" className="flex items-center gap-4 text-gray-400 hover:text-white transition">
          <Heart className="w-6 h-6" />
          <span>Liked Songs</span>
        </a>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-800">
        <div className="space-y-2">
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">My Playlist #1</p>
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Chill Vibes</p>
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Rock Classics</p>
          <p className="text-sm text-gray-400 hover:text-white cursor-pointer">Workout Mix</p>
        </div>
      </div>
    </>
  );
};

export default Playlists;