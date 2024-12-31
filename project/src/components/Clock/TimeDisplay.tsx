import React from 'react';

interface TimeDisplayProps {
  hours: string;
  minutes: string;
  seconds: string;
  period: string;
}

const TimeDisplay = ({ hours, minutes, seconds, period }: TimeDisplayProps) => {
  return (
    <div className="flex flex-col items-center gap-2 font-mono">
      <div className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wider text-center">
        <span className="text-white">{hours}</span>
        <span className="text-white animate-pulse">:</span>
        <span className="text-white">{minutes}</span>
        <span className="text-white animate-pulse">:</span>
        <span className="text-indigo-400">{seconds}</span>
      </div>
      <span className="text-xl md:text-2xl text-gray-400">{period}</span>
    </div>
  );
};

export default TimeDisplay;