import React from "react";
import { Link, useLocation } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const HomeScreen = (props) => {

    const location = useLocation();

    const receiveState = location.state !== null ? location.state : {};

    return <>
        <h1>Home Screen</h1>

        <h3>Received State:</h3>

        <p>name: {receiveState.name}</p>
        <p>age: {receiveState.age}</p>
        <Link to={AppRoutes.profile + "?id=22&userId=3333"}>Profile</Link>
    </>
}