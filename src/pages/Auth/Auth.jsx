import React, { useState } from "react";
import FormTextField from "../../components/FormTextField";
import Button from "react-bootstrap/Button";
import { loginApi } from "../../api/AuthApi.js";
import showErrorMessage from "../../utils/errorMessage";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";

const LoginForm = () => {

    const [errorMessage, setErrorMessage] = useState("");
    const [username, setUsername] = useState("");//"" is the default value
    const [password, setPassword] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();//prevent redirecting/refresh
        setIsSubmitting(true);//disable the buttons
        const response = await loginApi(username, password);
        setIsSubmitting(false);
        if(response.systemError) return alert(response.error)
        if(response.error) return showErrorMessage(response.error, setErrorMessage);
        dispatch(login(response))
        navigate("/")
    }

    return(
        <form className="authForm" onSubmit={submitHandler} >
            <h2 className="formTitle">Login</h2>
            <FormTextField
                type="text"
                name="username"
                label="Username"
                onChange={(event)=>setUsername(event.target.value)}
                value={username}
            />
            <FormTextField
                type="password"
                name="password"
                label="Password"
                onChange={(event)=>setPassword(event.target.value)}
                value={password}
            />
            <Button disabled={isSubmitting} className="btnPrimary" type="submit"> Login </Button>
            <Button 
                variant="secondary"
                disabled={isSubmitting}
                className="btnSecondary"
                type="button"
                onClick={()=>navigate("/register")}>
                Sign up 
            </Button>
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