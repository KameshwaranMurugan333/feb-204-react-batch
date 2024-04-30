import React from "react";
import { CompE } from "./CompE";
import { CompF } from "./CompF";

export const Compc = (props) => {
    return <div>
        <h1>Compc</h1>
        <CompE switch={props.switch} />
        <CompF />
    </div>
}