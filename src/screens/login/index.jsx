import React from "react";
import { useNavigate } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const LoginScreen = (props) => {

    const navigate = useNavigate();

    const onLoginBtnClicked = () => {
        navigate(AppRoutes.home);
    }

    const onBackBtnClicked =() => {
        navigate(-1);
    }

    const onForwardBtnClicked = () => {
        navigate(+1);
    }

    return <div>
        <button onClick={onLoginBtnClicked}>Login</button>

        <button onClick={onBackBtnClicked}>Back</button>
        <button onClick={onForwardBtnClicked}>Forward</button>
    </div>
}