import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const RootScreen = (props) => {
    return <div>
        <h1>Root</h1>

        <Link to={AppRoutes.login}>Login</Link><br></br>
        <Link to={AppRoutes.home}>Home</Link><br></br>
        <Link to={AppRoutes.profile}>Profile</Link>
    </div>
}