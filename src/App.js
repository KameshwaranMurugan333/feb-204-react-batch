import React from 'react';
import './App.css';
import StudentForm from './components/StudentForm';
import { StudentList } from './components/StudentsList';
import { StudentListContext } from './contexts';

function App() {

  const [form, setForm] = React.useState({});
  const [studentList, setStudentList] = React.useState([]);

  return (<>
    <h1>Student Register Form and List</h1>
    <StudentListContext.Provider value={{ form, setForm, studentList, setStudentList }}>
      <div id='' className={`app-header`}>
        <StudentForm />
        <StudentList />
        {form.name}
      </div>
    </StudentListContext.Provider>
  </>);
}

export default App;
