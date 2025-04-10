import React, { useState } from 'react';
import ChordChart from './components/chordChart';
import sourceData from './data/sourceData.json'; // Ensure this path is correct
import { prepareChordData } from './utils/chordDataUtils';

function App() {
  const [showChart, setShowChart] = useState(false);

  // Transform the raw JSON data into the format required by ChordChart
  const transformedData = prepareChordData(sourceData);

  return (
    <div>
      <h1>Unified Controls and Standards Framework</h1>
      <button onClick={() => setShowChart(true)}>Render Chord Chart</button>
      {showChart && <ChordChart data={transformedData} />}
    </div>
  );
}

export default App;