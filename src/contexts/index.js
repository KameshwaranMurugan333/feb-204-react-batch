import React from "react";

export const MyContext = React.createContext({
    count: 0,
    setCount: () => false
});