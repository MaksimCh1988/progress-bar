import './App.css';
import ProgressBar from './components/ProgressBar';
import InputForNumber from './components/InputForNumber';
import { useState } from 'react';

function App() {
  const [value, setValue] = useState(0);

  return (
    <div className="App">
      <InputForNumber setValue={setValue} />
      <ProgressBar thresholds={[25, 50, 100, 200, 500, 1000]} value={value} />
    </div>
  );
}

export default App;
