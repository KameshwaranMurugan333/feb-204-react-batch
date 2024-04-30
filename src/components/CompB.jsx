import React from "react";
import { CompD } from "./CompD";

export const Compb = (props) => {
    return <div>
        <h1>Compb</h1>
        <p>Received Count: {props.count}</p>
        <CompD count={props.count} />
    </div>
}