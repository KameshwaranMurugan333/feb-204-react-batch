import React from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const ProfileScreen = (props) => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const onLogoutBtnClicked = () => {
        localStorage.removeItem('isUserLoggedIn');
        navigate(AppRoutes.login);
    }

    return <>
        <h1>Profile Screen</h1>

        <h3>Received Search Params:</h3>

        <p>id: {searchParams.get('id')}</p>
        <p>userId: {searchParams.get('userId')}</p>

        <Link to={"/profile/11/2222"}>Kamesh Profile</Link> <br />
        <Link to={"/profile/12/3333"}>Dinesh Profile</Link> <br />
        <Link to={"/profile/13/4444"}>Harini Profile</Link> <br />

        <button onClick={onLogoutBtnClicked}>Logout</button>
    </>
}