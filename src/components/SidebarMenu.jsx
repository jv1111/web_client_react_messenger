import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css'
import "../styles/sidebar.css"
import { Messenger, PersonLinesFill } from "react-bootstrap-icons"

const SidebarMenu = () => {
    const iconSize = 20;
    const iconDefaultColor = "#FFFFFF"
    return (
        <ul id='sidebar'>
            <li className='sidebarItem'>
                <Messenger color='#FFFFFF' size={iconSize} />
            </li>
            <li className='sidebarItem'>
                <PersonLinesFill color={iconDefaultColor} size={iconSize} />
            </li>
        </ul>
    )
}

export default SidebarMenu