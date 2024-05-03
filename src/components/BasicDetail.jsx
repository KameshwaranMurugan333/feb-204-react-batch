import React from "react";
import { PersonalDetail } from "./PersonalDetail";
import { StudentListContext } from "../contexts";

export const BasicDetail = () => {

    const studentContext = React.useContext(StudentListContext);

    return <div>
        <h4>Basic Details</h4>
        <hr></hr>
        <input
            name="name"
            value={studentContext.form.name}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, name: e.target.value })}
            type="text"
            placeholder="Enter you name"
        /><br />
        <input
            name="gender"
            type="text"
            placeholder="Enter you gender"
            value={studentContext.form.gender}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, gender: e.target.value })}
        /><br />
        <PersonalDetail />
    </div>
}