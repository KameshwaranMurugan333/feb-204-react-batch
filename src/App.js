import './App.css';
import MyClassComponent from './ClassComponent';
import MyFunctionalComponent from './FunctionalComponent';
import { Goal } from './Goal';

function App() {
  return (
    <div id='' className='App-header'>
      <Goal isGoal={true} />
      <MyClassComponent name={"I am from App"} age={25} />
      <MyFunctionalComponent name={"I am from App"} age={25} />
    </div>
  );
}

export default App;
