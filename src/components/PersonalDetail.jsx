import React from "react";
import { StudentListContext } from "../contexts";

export const PersonalDetail = () => {

    const studentContext = React.useContext(StudentListContext);

    return <div>
        <h4>Personal Details</h4>
        <hr></hr>
        <input
            value={studentContext.form.fatherName}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, fatherName: e.target.value })}
            name="fatherName"
            type="text"
            placeholder="Enter you father name" /><br />

        <input
            value={studentContext.form.motherName}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, motherName: e.target.value })}
            name="motherName"
            type="text"
            placeholder="Enter you mother name" /><br />
        <input
            value={studentContext.form.address}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, address: e.target.value })}
            name="address"
            type="text"
            placeholder="Enter you address" /><br />
    </div>
}