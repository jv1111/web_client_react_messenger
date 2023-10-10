import React from "react";
import FormTextField from "../../components/FormTextField";

const AuthPage = () => {
    return(
        <div className="page">
            <div className="titleDiv">
                <h1 className="title">Messenger</h1>
                <p className="titel-description">Welcome to messenger</p>
            </div>
            <form
                className="authForm"
            >
                <h2 className="labelTitle">Login</h2>
                <FormTextField
                    type="text"
                    name="usernameOrEmail"
                    label="Username or Email"
                />
                <FormTextField
                    type="password"
                    name="password"
                    label="Password"
                />
                <button className="btnPrimary" type="submit"> Login </button>
                <button className="btnSecondary" type="button"> Sign up </button>
            </form>
        </div>
    )
}

export default AuthPage;