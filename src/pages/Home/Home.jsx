import React, { useState } from "react";
import { logoutApi } from "../../api/AuthApi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/slice/authSlice";
import SidebarMenu from "../../components/SidebarMenu";
import "../../styles/topInfo.css"
import "../../styles/homePage.css"
import Chats from "../../components/Chats";
import TopChatInfo from "../../components/TopChatInfo";
import ChatBox from "../../components/ChatBox";

const HomePage = () => {

    const [activeSidebar, setActiveSidebar] = useState("Messenger");
    const [selectedUser, setSelectedUser] = useState(null);
    const dispatch = useDispatch()

    const logoutHandler = async () => {
        await logoutApi()
        dispatch(logout())
    }

    const sideBarResultPanelHandler = () => {
        switch (activeSidebar) {
            case "Messenger" : return <Chats selectedUser={selectedUser} setSelectedUser={setSelectedUser} />
        }
    }

    return(
        <div className="full-page" id="mainPage">
            <div id="sideBarMenuPanel">
                <SidebarMenu activeSidebar={activeSidebar} setActiveSidebar={setActiveSidebar}/>
            </div>
            <div id="sideBarResultPanel">
                {sideBarResultPanelHandler()}
            </div>
            <div id="mainChatPanel">
                <div id="topInfo">
                    <TopChatInfo selectedUser={selectedUser}/>
                </div>
                <div id="chatPanel">
                    <ChatBox receiver={selectedUser}/>
                </div>
            </div>
        </div>
    )
}

export default HomePage;