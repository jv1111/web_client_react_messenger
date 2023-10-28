import React, { useState } from "react"
import { Formik, Form } from "formik/dist";
import { Button } from "react-bootstrap";
import UserValidationSchema from "../../validation/UserValidationSchema"
import FormikTextField from "../../components/FormikTextField";
import { registerApi } from "../../api/AuthApi"
import showErrorMessage from "../../utils/errorMessage";
import { useDispatch } from "react-redux";
import { login } from "../../redux/slice/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {

    const [registerErrorMessage, setRegisterErrorMessage] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: ""
    }

    const submitHandler = async (userData, setSubmitting) => {
        const response = await registerApi(userData);
        setSubmitting(false);
        if(response.systemError) return alert(response.error)
        if(response.error){ return showErrorMessage(response.error, setRegisterErrorMessage) }
        console.log(response)
        dispatch(login(response))
        navigate("/")
    }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={UserValidationSchema}
            onSubmit={(userData, { setSubmitting }) => {
            setTimeout(() => {
                    submitHandler(userData, setSubmitting);                    
                }, 400);
            }}
        >
          {({ isSubmitting }) => (
            <Form className="authForm">
            <   h2 className="formTitle">Sign up</h2>
                <FormikTextField
                    type="text"
                    name="username"
                    label="Username"
                    required="required"
                />
                <FormikTextField
                    type="password"
                    name="password"
                    label="Password"
                    required="required"
                />
                <Button type="submit" disabled={isSubmitting}>Register</Button>
                <label className="error">{registerErrorMessage}</label>
            </Form>
          )}  
        </Formik>
    )
}

export default RegisterPage