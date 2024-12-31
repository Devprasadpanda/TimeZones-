import React, { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import TimeDisplay from './TimeDisplay';
import { formatTimeForZone } from '../../utils/timeUtils';
import { timezoneGroups } from '../../data/timezones';

interface ClockProps {
  initialZone: string;
  onBack: () => void;
}

const Clock = ({ initialZone, onBack }: ClockProps) => {
  const [time, setTime] = useState(new Date());
  
  const countryName = timezoneGroups
    .flatMap(group => group.zones)
    .find(zone => zone.value === initialZone)?.label || 'Unknown Location';

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { hours, minutes, seconds, period } = formatTimeForZone(time, initialZone);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <button
        onClick={onBack}
        className="fixed top-20 left-4 text-white hover:text-indigo-300 
                 transition-colors flex items-center gap-2 bg-black/40 px-4 py-2 
                 rounded-lg backdrop-blur-sm"
      >
        <ArrowLeft className="w-5 h-5" />
        <span>Back</span>
      </button>

      <h1 className="text-xl md:text-2xl text-white mb-8 text-center">
        Current Time in {countryName}
      </h1>

      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-6 md:p-8 
                    shadow-2xl border border-white/10 w-full max-w-sm mx-auto">
        <TimeDisplay
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          period={period}
        />
      </div>
    </div>
  );
};

export default Clock;