import React from 'react';
import { Play, Heart } from 'lucide-react';

const MainContent = () => {
  const playlists = [
    {
      title: "Today's Top Hits",
      description: "Jung Kook is on top of the Hottest 50!",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop"
    },
    {
      title: "RapCaviar",
      description: "New music from Drake, Travis Scott and more",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop"
    },
    {
      title: "All Out 2010s",
      description: "The biggest songs of the 2010s",
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
    },
    {
      title: "Rock Classics",
      description: "Rock legends & epic songs",
      image: "https://images.unsplash.com/photo-1511735111819-9a3f7709049c?w=300&h=300&fit=crop"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-indigo-900 to-black flex-1 overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Good afternoon</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {playlists.slice(0, 6).map((playlist, index) => (
          <div key={index} className="flex items-center bg-white/10 rounded-md hover:bg-white/20 transition cursor-pointer group">
            <img src={playlist.image} alt={playlist.title} className="w-20 h-20 rounded-l-md" />
            <span className="text-white font-semibold px-4">{playlist.title}</span>
            <button className="ml-auto mr-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition">
              <Play className="w-4 h-4 text-black" fill="black" />
            </button>
          </div>
        ))}
      </div>

      <h2 className="text-xl font-bold text-white mb-6">Made for You</h2>
      <div className="grid grid-cols-4 gap-6">
        {playlists.map((playlist, index) => (
          <div key={index} className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition cursor-pointer group">
            <div className="relative">
              <img src={playlist.image} alt={playlist.title} className="w-full aspect-square object-cover rounded-md mb-4" />
              <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition shadow-lg translate-y-2 group-hover:translate-y-0">
                <Play className="w-4 h-4 text-black" fill="black" />
              </button>
            </div>
            <h3 className="text-white font-semibold mb-2">{playlist.title}</h3>
            <p className="text-gray-400 text-sm">{playlist.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainContent;