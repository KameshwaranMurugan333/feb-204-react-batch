import React from "react";
import { CompD } from "./CompD";

export const Compb = (props) => {
    return <div>
        <h1>Compb</h1>
        <button onClick={() => props.setCount(props.count + 1)}>Increment</button>
        <p>Received Count: {props.count}</p>
        <CompD count={props.count} toggleSwithc={props.toggleSwithc} />
    </div>
}