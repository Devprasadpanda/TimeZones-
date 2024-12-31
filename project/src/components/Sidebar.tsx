import React from 'react';
import { Home, Search, Library, PlusSquare, Heart, Music } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="bg-black w-64 p-6 flex flex-col h-full">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <Music className="w-5 h-5 text-black" />
        </div>
        <span className="text-white text-xl font-bold">Musicify</span>
      </div>
      
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
    </div>
  );
};

export default Sidebar;