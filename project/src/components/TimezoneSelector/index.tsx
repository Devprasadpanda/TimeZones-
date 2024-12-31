import React, { useState } from 'react';
import { timezoneGroups } from '../../data/timezones';
import { ChevronDown } from 'lucide-react';

interface TimezoneSelectorProps {
  selectedZone: string;
  onZoneChange: (zone: string) => void;
}

const TimezoneSelector = ({ selectedZone, onZoneChange }: TimezoneSelectorProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const selectedZoneLabel = timezoneGroups
    .flatMap(group => group.zones)
    .find(zone => zone.value === selectedZone)?.label || 'UTC';

  return (
    <div className="absolute top-4 left-4 z-50">
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-lg
                     border border-white/20 text-white text-lg font-medium
                     hover:bg-black/90 transition-colors shadow-lg"
        >
          <span>{selectedZoneLabel}</span>
          <ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 mt-2 w-80 max-h-[80vh] overflow-y-auto
                        bg-black/95 backdrop-blur-md rounded-lg border border-white/20 shadow-xl">
            <div className="p-2">
              <div
                className="px-4 py-3 text-white text-lg hover:bg-white/10 rounded cursor-pointer
                           transition-colors"
                onClick={() => {
                  onZoneChange('UTC');
                  setIsOpen(false);
                }}
              >
                UTC (Coordinated Universal Time)
              </div>
              
              {timezoneGroups.map((group) => (
                <div key={group.region} className="mt-3">
                  <div className="px-4 py-2 text-lg text-indigo-300 font-bold border-b border-indigo-500/20">
                    {group.region}
                  </div>
                  {group.zones.map((zone) => (
                    <div
                      key={zone.value}
                      className="px-4 py-3 text-white text-lg hover:bg-white/10 rounded cursor-pointer
                               transition-colors"
                      onClick={() => {
                        onZoneChange(zone.value);
                        setIsOpen(false);
                      }}
                    >
                      {zone.label}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimezoneSelector;