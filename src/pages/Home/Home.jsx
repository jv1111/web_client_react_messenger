import React, { useState } from "react";
import { logoutApi } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import SidebarMenu from "../../components/SidebarMenu";
import "../../styles/homePage.css"
import Chats from "../../components/Chats";

const HomePage = () => {

    const [activeSidebar, setActiveSidebar] = useState("Messenger");
    const dispatch = useDispatch()

    const logoutHandler = async () => {
        await logoutApi()
        dispatch(logout())
    }
    const sideBarResultPanelHandler = () => {
        switch (activeSidebar) {
            case "Messenger" : return <Chats />
        }
    }
    console.log(activeSidebar)
    return(
        <div className="full-page" id="mainPage">
            <div id="sideBarMenuPanel">
                <SidebarMenu activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}/>
            </div>
            <div id="sideBarResultPanel">
                {sideBarResultPanelHandler()}
            </div>
        </div>
    )
}

export default HomePage;