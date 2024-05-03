import React from "react";
import { StudentListContext } from "../contexts";

export const SSLCDetails = () => {

    const studentContext = React.useContext(StudentListContext);

    return <div>
        <h4>SSLC Details</h4>
        <hr></hr>
        <input
            value={studentContext.form.sslc_mark}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, sslc_mark: e.target.value })}
            name="mark"
            type="number"
            placeholder="Enter you mark" /><br />

        <input
            value={studentContext.form.sslc_percentage}
            onChange={(e) => studentContext.setForm({ ...studentContext.form, sslc_percentage: e.target.value })}
            name="percentage"
            type="number"
            placeholder="Enter you percentage" /><br />
    </div>
}