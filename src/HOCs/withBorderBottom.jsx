import React from "react";

export const withBorderBottom = (Component) => (props) => {
    return <div
        style={{ borderBottom: "5px solid red" }}>
        <p>I am from HOC</p>
        <Component title={"I am a PROP from HOC."} />
    </div>
}