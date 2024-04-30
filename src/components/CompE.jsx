import React from "react";

export const CompE = (props) => {
    return <div>
        <h1>CompE</h1>
        <div style={{background: props.switch ? "red" : "white", height: "100px", width:"100px"}}></div>
    </div>
}