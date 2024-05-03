import React from 'react';
import './App.css';
import { CompA } from './components/CompA';
import { Compb } from './components/CompB';
import { MyContext } from './contexts';

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <MyContext.Provider value={{ count, setCount }}>
      <div id='' className='App-header'>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <CompA />
        <Compb />
      </div>
    </MyContext.Provider>
  );
}

export default App;
