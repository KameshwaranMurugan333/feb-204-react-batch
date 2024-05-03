import React from "react";
import { MyContext } from "../contexts";

export const CompH = () => {

    const myContext = React.useContext(MyContext);

    return <div>
        <h1>CompH</h1>
        <p>Count: {myContext.count}</p>
    </div>
}