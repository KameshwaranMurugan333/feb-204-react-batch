import React, { useRef } from 'react';
import './App.css';
import { ChildComponent } from './components/ChildComponent';
import { Greetings } from './components/Greetings';
import { Button } from 'react-bootstrap';

function App() {

  const inputRef = useRef();

  const onSubmit = () => {
    alert(inputRef.current.value);
    inputRef.current.style.width = "100%";
  };

  return (<>
    <input ref={inputRef} placeholder='Enter name' type='text' />
    <button onClick={onSubmit}>Submit</button>

    <ChildComponent ref={inputRef} />

    <Greetings greetingPrefix={"Welcome all"} name={"Kamesh"} />

    <Button>My Button</Button>
  </>);
}

export default App;
