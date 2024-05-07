import React from "react";

export const ChildComponent = React.forwardRef((props, ref) => {

    const updateName = () => {
        ref.current.value = "Kamesh";
    }

    return <div>
        <h1>ChildComponent</h1>
        <button onClick={updateName}>Update Name</button>
    </div>
})