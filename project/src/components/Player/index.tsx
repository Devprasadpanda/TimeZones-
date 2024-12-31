import React from 'react';
import NowPlaying from './NowPlaying';
import Controls from './Controls';
import VolumeControl from './VolumeControl';

const Player = () => {
  return (
    <div className="bg-black border-t border-gray-800 p-4 flex items-center justify-between">
      <NowPlaying />
      <Controls />
      <VolumeControl />
    </div>
  );
};

export default Player;