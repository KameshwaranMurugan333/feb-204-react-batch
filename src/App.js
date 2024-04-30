import React from 'react';
import './App.css';
import { CompA } from './components/CompA';
import { Compb } from './components/CompB';

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <div id='' className='App-header'>
      <button onClick={() =>  setCount(count + 1)}>Increment</button>
      <CompA />
      <Compb count={count} />
    </div>
  );
}

export default App;
