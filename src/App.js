import React from 'react';
import './App.css';
import LifeCycleMethods from './components/LifeCycleMethods';

function App() {

  const [count, setCount] = React.useState(0);

  return (
    <div id='' className='App-header'>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {count > 0 && <LifeCycleMethods count={count} />}
    </div>
  );
}

export default App;
