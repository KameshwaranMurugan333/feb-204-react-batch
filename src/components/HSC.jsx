import React from "react";
import { StudentListContext } from "../contexts";

export const HSCDetails = () => {

    const studentContext = React.useContext(StudentListContext);

    return <div>
        <h4>HSC Details</h4>
        <hr></hr>
        <input
            value={studentContext.form.hsc_mark}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, hsc_mark: e.target.value })}
            name="mark"
            type="number"
            placeholder="Enter you mark" /><br />

        <input
            value={studentContext.form.hsc_percentage}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, hsc_percentage: e.target.value })}
            name="percentage"
            type="number"
            placeholder="Enter you percentage" /><br />
    </div>
}