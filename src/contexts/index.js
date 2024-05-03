import React from "react";

export const MyContext = React.createContext({
    count: 0,
    setCount: () => false
});

export const StudentListContext = React.createContext({
    form: {},
    setForm: () => false,
    
    studentList: [],
    setStudentList: () => false,
})