import React from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import Playlists from './Playlists';

const Sidebar = () => {
  return (
    <div className="bg-black w-64 p-6 flex flex-col h-full">
      <Logo />
      <Navigation />
      <Playlists />
    </div>
  );
};

export default Sidebar;