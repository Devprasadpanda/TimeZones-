import React from 'react';
import PlaylistRow from './PlaylistRow';
import PlaylistCard from './PlaylistCard';
import { playlists } from '../../data/playlists';

const MainContent = () => {
  return (
    <div className="bg-gradient-to-b from-indigo-900 to-black flex-1 overflow-y-auto p-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-white">Good afternoon</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8">
        {playlists.slice(0, 6).map((playlist, index) => (
          <PlaylistRow
            key={index}
            title={playlist.title}
            image={playlist.image}
          />
        ))}
      </div>

      <h2 className="text-xl font-bold text-white mb-6">Made for You</h2>
      <div className="grid grid-cols-4 gap-6">
        {playlists.map((playlist, index) => (
          <PlaylistCard
            key={index}
            title={playlist.title}
            description={playlist.description}
            image={playlist.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MainContent;