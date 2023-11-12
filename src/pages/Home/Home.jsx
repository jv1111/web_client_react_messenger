import React from "react";
import { logoutApi } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import SidebarMenu from "../../components/SidebarMenu";
import "../../styles/homePage.css"
import Chats from "../../components/Chats";

const HomePage = () => {

    const auth  = useSelector(state => state.auth)
    const dispatch = useDispatch()

    const logoutHandler = async () => {
        await logoutApi()
        dispatch(logout())
    }

    return(
        <div className="full-page" id="mainPage">
            <div id="sideBarMenuPanel">
                <SidebarMenu/>
            </div>
            <div id="sideBarResultPanel">
                <Chats/>
            </div>
        </div>
    )
}

export default HomePage;