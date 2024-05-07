import React, { useRef } from 'react';
import './App.css';

function App() {

  const inputRef = useRef();

  const onSubmit = () => {
    alert(inputRef.current.value);
    inputRef.current.style.width = "100%";
  };

  return (<>
    <input ref={inputRef} placeholder='Enter name' type='text' />
    <button onClick={onSubmit}>Submit</button>
  </>);
}

export default App;
