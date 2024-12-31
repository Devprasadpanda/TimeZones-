import React from 'react';
import { timezoneGroups } from '../../data/timezones';

interface TimezoneSelectProps {
  selectedZone: string;
  onZoneChange: (zone: string) => void;
}

const TimezoneSelect = ({ selectedZone, onZoneChange }: TimezoneSelectProps) => {
  return (
    <select
      value={selectedZone}
      onChange={(e) => onZoneChange(e.target.value)}
      className="mt-4 w-full px-4 py-2 bg-black/50 text-white text-lg rounded-lg 
                 border-2 border-indigo-500/30 focus:border-indigo-500 
                 focus:outline-none focus:ring-2 focus:ring-indigo-500/50
                 appearance-none cursor-pointer hover:bg-black/60 transition-colors"
      style={{ WebkitAppearance: 'none' }}
    >
      <option value="UTC" className="bg-gray-900 text-white">
        UTC (Coordinated Universal Time)
      </option>
      
      {timezoneGroups.map((group) => (
        <optgroup 
          key={group.region} 
          label={group.region}
          className="bg-gray-900 text-white font-bold"
        >
          {group.zones.map((zone) => (
            <option 
              key={zone.value} 
              value={zone.value}
              className="bg-gray-900 text-white font-normal"
            >
              {zone.label}
            </option>
          ))}
        </optgroup>
      ))}
    </select>
  );
};

export default TimezoneSelect;