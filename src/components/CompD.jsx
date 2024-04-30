import React from "react";
import { CompG } from "./CompG";
import { CompH } from "./CompH";

export const CompD = (props) => {
    return <div>
        <h1>CompD</h1>
        <p>Received Prop: {props.count}</p>
        <CompG />
        <CompH count={props.count} />
    </div>
}