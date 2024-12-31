import React, { useState } from 'react';
import CountrySelector from './components/CountrySelector';
import Clock from './components/Clock';
import Navbar from './components/Navbar';

function App() {
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <Navbar />
      <div className="pt-16">
        {!selectedZone ? (
          <CountrySelector onZoneSelect={setSelectedZone} />
        ) : (
          <Clock initialZone={selectedZone} onBack={() => setSelectedZone(null)} />
        )}
      </div>
    </div>
  );
}

export default App;