import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { timezoneGroups } from '../../data/timezones';

interface CountrySelectorProps {
  onZoneSelect: (zone: string) => void;
}

const CountrySelector = ({ onZoneSelect }: CountrySelectorProps) => {
  const [search, setSearch] = useState('');
  
  const allCountries = useMemo(() => 
    timezoneGroups.flatMap(group => 
      group.zones.map(zone => ({
        ...zone,
        region: group.region
      }))
    ), []
  );

  const filteredCountries = useMemo(() => 
    allCountries.filter(country =>
      country.label.toLowerCase().includes(search.toLowerCase())
    ),
    [search, allCountries]
  );

  return (
    <div className="h-screen p-4 flex flex-col max-w-md mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold text-white text-center mb-8 mt-4">
        Select Your Country
      </h1>
      
      <div className="relative mb-6">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Search country..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 bg-black/40 border border-white/20 
                   rounded-lg text-white placeholder-gray-400 focus:outline-none 
                   focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
      </div>

      <div className="flex-1 overflow-y-auto bg-black/30 rounded-lg border border-white/10 mb-4">
        {filteredCountries.map((country) => (
          <button
            key={country.value}
            onClick={() => onZoneSelect(country.value)}
            className="w-full px-4 py-3 text-left text-white hover:bg-white/10 
                     transition-colors border-b border-white/5 flex justify-between 
                     items-center group"
          >
            <span>{country.label}</span>
            <span className="text-sm text-indigo-300 opacity-60 group-hover:opacity-100">
              {country.region}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CountrySelector;