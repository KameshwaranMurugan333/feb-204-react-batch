import React from 'react';
import './App.css';
import { CompA } from './components/CompA';
import { Compb } from './components/CompB';

function App() {

  const [count, setCount] = React.useState(0);

  const [swithc, toggleSwithc] = React.useState(true);

  const updateToggleSwitch = () => {
    toggleSwithc(!swithc);
  }


  return (
    <div id='' className='App-header'>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <CompA switch={swithc} />
      <Compb count={count} setCount={setCount} toggleSwithc={updateToggleSwitch} />
    </div>
  );
}

export default App;
