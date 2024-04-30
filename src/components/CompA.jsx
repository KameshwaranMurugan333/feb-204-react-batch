import React from "react";
import { Compc } from "./CompC";

export const CompA = (props) => {
    return <div>
        <h1>CompA</h1>
        <Compc switch={props.switch} />
    </div>
}