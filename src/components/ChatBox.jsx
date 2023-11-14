import {Send} from "react-bootstrap-icons"
import "../styles/Chatbox.css"
import { useState } from "react"
import { apiSendMessage } from "../api/ChatApi"
import { useSelector } from "react-redux"


const ChatBox = ({receiver}) => {
    const auth = useSelector(state => state.auth)// access auth from redux authSlice
    const [newMessage, setNewMessage] = useState("")
    const sender = auth.user.user.id
    const sendHandler = async () => {
        console.log(receiver._id)
        const response = await apiSendMessage(newMessage,sender, receiver._id)
        if(response.success){ alert("sent") }
    }

    return(
        <div className="chatBox">
            <div className="messeges">

            </div>
            <div className="inputBox">
                <div className="inputTextBox">
                    <input 
                        type="text"
                        onChange={(e)=>setNewMessage(e.target.value)}
                        placeholder="Messege"
                    />
                </div>
                    <Send onClick={sendHandler} color="blue" />
            </div>
        </div>
    )
}

export default ChatBox