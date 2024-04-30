import React from "react";

export const LoginForm = () => {

    const [email, updateEmail] = React.useState("");
    const [password, updatePassword] = React.useState("");


    const onEmailChange = (event) => {
        updateEmail(event.target.value);
    };

    const onPasswordChange = (event) => {
        updatePassword(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        console.log("Email: ", email);
        console.log("Password: ", password);
    };


    return <div>
        <h1>Login Form</h1>

        <form onSubmit={onSubmit}>

            <input
                onChange={onEmailChange}
                name="email"
                type="email"
                placeholder="Enter Email"
                value={email}
            /> <br />

            <input
                name="pasword"
                onChange={onPasswordChange}
                value={password}
                type="password"
                placeholder="Enter Password"
            /> <br />

            <input type="submit" value={"Login"} />
        </form>
    </div>
}