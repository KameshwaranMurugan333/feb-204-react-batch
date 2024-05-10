import React from "react";
import { useNavigate, useParams } from "react-router-dom";

export const OtherProfileScreen = (props) => {

    const navigate = useNavigate();
    const { id, userId } = useParams();

    const onBackBtnClicked = () => {
        navigate(-1);
    }

    return <>
        <h1>Other Profile Screen</h1>

        <h3>Received URL Params:</h3>
        <p>id: {id}</p>
        <p>userId: {userId}</p>

        <button onClick={onBackBtnClicked}>Back</button>
    </>
}