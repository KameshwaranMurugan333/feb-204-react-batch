import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const HomeScreen = (props) => {
    return <>
        <h1>Home Screen</h1>
        <Link to={AppRoutes.profile}>Profile</Link>
    </>
}