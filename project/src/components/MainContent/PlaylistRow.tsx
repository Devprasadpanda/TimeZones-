import React from 'react';
import { Play } from 'lucide-react';

interface PlaylistRowProps {
  title: string;
  image: string;
}

const PlaylistRow = ({ title, image }: PlaylistRowProps) => {
  return (
    <div className="flex items-center bg-white/10 rounded-md hover:bg-white/20 transition cursor-pointer group">
      <img src={image} alt={title} className="w-20 h-20 rounded-l-md" />
      <span className="text-white font-semibold px-4">{title}</span>
      <button className="ml-auto mr-4 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition">
        <Play className="w-4 h-4 text-black" fill="black" />
      </button>
    </div>
  );
};

export default PlaylistRow;