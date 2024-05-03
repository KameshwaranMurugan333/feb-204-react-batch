import React from "react";
import { HSCDetails } from "./HSC";
import { SSLCDetails } from "./SSLC";

export const AcademicDetails = () => {
    return <div>
        <h4>Academic Details</h4>
        <hr></hr>
        <HSCDetails />
        <SSLCDetails />
    </div>
}