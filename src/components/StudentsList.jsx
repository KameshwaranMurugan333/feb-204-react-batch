import React from "react";
import './StudentList.css';
import { StudentListContext } from "../contexts";

export const StudentList = () => {

    const studentContext = React.useContext(StudentListContext);

    return <table>
        <thead>
            <th>Sl.No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Father Name</th>
            <th>Mother Name</th>
            <th>Addres</th>
            <th>HSC Mark</th>
            <th>HSC Percentage</th>
            <th>SSLC Mark</th>
            <th>SSLC Percentage</th>
        </thead>
        <tbody>
            {studentContext.studentList.map((student,index) => {
                return <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{student.name}</td>
                    <td>{student.gender}</td>
                    <td>{student.fatherName}</td>
                    <td>{student.motherName}</td>
                    <td>{student.address}</td>
                    <td>{student.hsc_mark}</td>
                    <td>{student.hsc_percentage}</td>
                    <td>{student.sslc_mark}</td>
                    <td>{student.sslc_percentage}</td>
                </tr>
            })}
        </tbody>
    </table>
}