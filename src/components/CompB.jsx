import React from "react";
import { CompD } from "./CompD";
import { MyContext } from "../contexts";

export const Compb = () => {

    const myContext = React.useContext(MyContext);

    return <div>
        <h1>Compb</h1>
        <button onClick={() => myContext.setCount(myContext.count + 1)}>Increment</button>
        <CompD />
    </div>
}