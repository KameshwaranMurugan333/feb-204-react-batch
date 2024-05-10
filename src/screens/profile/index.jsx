import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const ProfileScreen = (props) => {

    const navigate = useNavigate();

    const onLogoutBtnClicked = () => {
        localStorage.removeItem('isUserLoggedIn');
        navigate(AppRoutes.login);
    }

    return <>
        <h1>Profile Screen</h1>

        <button onClick={onLogoutBtnClicked}>Logout</button>
    </>
}