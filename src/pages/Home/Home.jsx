import React from "react";
import { logoutApi } from "../../api/AuthApi";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slice/authSlice";

const AuthPage = () => {

    const dispatch = useDispatch()

    const logoutHandler = async () => {
        await logoutApi()
        dispatch(logout())
    }

    return(
        <div className="page">
            <h1>Home page</h1>
            <button onClick={logoutHandler}>Logout</button>
        </div>
    )
}

export default AuthPage;