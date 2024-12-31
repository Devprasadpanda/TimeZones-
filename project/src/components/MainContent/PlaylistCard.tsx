import React from 'react';
import { Play } from 'lucide-react';

interface PlaylistCardProps {
  title: string;
  description: string;
  image: string;
}

const PlaylistCard = ({ title, description, image }: PlaylistCardProps) => {
  return (
    <div className="bg-white/5 p-4 rounded-md hover:bg-white/10 transition cursor-pointer group">
      <div className="relative">
        <img src={image} alt={title} className="w-full aspect-square object-cover rounded-md mb-4" />
        <button className="absolute bottom-2 right-2 bg-green-500 rounded-full p-3 opacity-0 group-hover:opacity-100 transition shadow-lg translate-y-2 group-hover:translate-y-0">
          <Play className="w-4 h-4 text-black" fill="black" />
        </button>
      </div>
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
};

export default PlaylistCard;