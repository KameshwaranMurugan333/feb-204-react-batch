import React from "react";
import { MadeGoal } from "./MadeGoal";
import { MissedGoal } from "./MissedGoal";

export const Goal = (props) => {
    // 1. Using if condition
    // if(props.isGoal){
    //     return <MadeGoal />
    // }

    // 2. Using ternary operator
    // return props.isGoal ? <MadeGoal /> : <MissedGoal />

    // 3. Using Logial && operator
    return <div>
        {props.isGoal === true && <MadeGoal />}
        {props.isGoal === false && <MissedGoal />}
    </div>
}