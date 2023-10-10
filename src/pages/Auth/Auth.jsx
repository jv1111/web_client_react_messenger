import React, { useState } from "react";
import FormTextField from "../../components/FormTextField";
import { loginApi } from "../api/AuthApi.js";

const LoginForm = () => {

    const [usernameOrEmail, setUsernameOrEmail] = useState("");//"" is the default value
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const submitHandler = async (event) => {
        event.preventDefault();//prevent redirecting/refresh
        setIsSubmitting(true);//disable the buttons
        const response = await loginApi(usernameOrEmail, password);
        setIsSubmitting(false);
        if(!response.success){ return alert(response.response.data.error); }
        alert("Logged in");
    }

    return(
        <form className="authForm" onSubmit={submitHandler} >
            <h2 className="labelTitle">Login</h2>
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
            <button disabled={isSubmitting} className="btnPrimary" type="submit"> Login </button>
            <button disabled={isSubmitting} className="btnSecondary" type="button"> Sign up </button>
        </form>
    );
}

const AuthPage = () => {
    return(
        <div className="page">
            <div className="titleDiv">
                <h1 className="title">Messenger</h1>
                <p className="titel-description">Welcome to messenger</p>
            </div>
            {<LoginForm/>}
        </div>
    )
}

export default AuthPage;