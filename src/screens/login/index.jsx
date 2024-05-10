import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { AppRoutes } from "../../router/routes";

export const LoginScreen = (props) => {

    const navigate = useNavigate();
    const [searchParams] = useSearchParams();

    const onLoginBtnClicked = () => {

        // Setting the localstorage 'isUserLoggedIn' to true
        localStorage.setItem('isUserLoggedIn', true);

        const from = searchParams.get('from');

        if (from) {
            navigate(from);
        } else {
            navigate(AppRoutes.home, {
                state: {
                    name: "Kamesh",
                    age: "27"
                }
            });
        }
    }

    const onBackBtnClicked = () => {
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