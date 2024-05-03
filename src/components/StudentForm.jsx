import React from "react";
import { BasicDetail } from "./BasicDetail";
import { AcademicDetails } from "./AcademicDetails";
import { StudentListContext } from "../contexts";

export const StudentForm = () => {

    const studentContext = React.useContext(StudentListContext);

    const onSubmit = () => {
        studentContext.setStudentList([...studentContext.studentList, studentContext.form]);
        studentContext.setForm({});
    }

    return <div>
        <h4>Student Form</h4>
        <hr></hr>
        <BasicDetail />
        <AcademicDetails />

        <button onClick={onSubmit}>Add to Student List</button>
    </div>
}