import React, { useState } from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/sidebar.css"
import { Messenger, PersonLinesFill } from "react-bootstrap-icons"

const iconSize = 20;
const iconDefaultColor = "#FFFFFF"
const menu = [
    {
        name: "Messenger",
        icon: <Messenger color='#FFFFFF' size={iconSize} />
    },
    {
        name: "Group",
        icon: <PersonLinesFill color={iconDefaultColor} size={iconSize} />
    }
]

const SidebarMenu = ({activeSidebar, setActiveSidebar}) => {
    const iconSize = 20;
    const selectHandler = (item) => {
        setActiveSidebar(item.name)
    }
    return (
        <ul id='sidebar'>
            {menu.map((item, index) => {
                const isSelected = item.name === activeSidebar;
                const className = isSelected? "sidebarItem active" : "sidebarItem"
                return (
                    <li className={className} onClick={()=>selectHandler(item)}>
                        {item.icon}
                    </li>
                )
            })}
        </ul>
    )
}

export default SidebarMenu