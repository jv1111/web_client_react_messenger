import React, { useState } from "react";
import FormTextField from "../../components/FormTextField";
import Button from "react-bootstrap/Button";
import { loginApi } from "../../api/AuthApi.js";
import showErrorMessage from "../../utils/errorMessage";

const LoginForm = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [usernameOrEmail, setUsernameOrEmail] = useState("");//"" is the default value
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();//prevent redirecting/refresh
        setIsSubmitting(true);//disable the buttons
        const response = await loginApi(usernameOrEmail, password);
        setIsSubmitting(false);
        if(!response.success){ return showErrorMessage(response.response.data.error, setErrorMessage);}
        alert("Logged in");
    }

    return(
        <form className="authForm" onSubmit={submitHandler} >
            <h2 className="formTitle">Login</h2>
            <FormTextField
                type="text"
                name="usernameOrEmail"
                label="Username or Email"
                onChange={(event)=>setUsernameOrEmail(event.target.value)}
                value={usernameOrEmail}
            />
            <FormTextField
                type="password"
                name="password"
                label="Password"
                onChange={(event)=>setPassword(event.target.value)}
                value={password}
            />
            <Button disabled={isSubmitting} className="btnPrimary" type="submit"> Login </Button>
            <Button variant="secondary" disabled={isSubmitting} className="btnSecondary" type="button"> Sign up </Button>
            <label className="error">{errorMessage}</label>
        </form>
    );
}

const AuthPage = () => {
    return(
        <div className="page container">
            <div className="titleDiv">
                <h1 className="title">Messenger</h1>
                <p className="titel-description">Welcome to messenger</p>
            </div>
            {<LoginForm/>}
        </div>
    )
}

export default AuthPage;