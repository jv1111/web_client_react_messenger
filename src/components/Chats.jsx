import { useEffect, useState } from "react"
import "../styles/sidebarResult.css"
import { Search } from "react-bootstrap-icons"
import { apiGetUsers, searchPeople } from "../api/ChatApi";

const Chats = ({selectedUser, setSelectedUser}) => {

    const [searchResult, setSearchResult] = useState([]);

    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        const response = await searchPeople(inputValue)
        setSearchResult(response)
    }

    const selectUserHandler = async (selectedUser, index) => {
        console.log(index)
        console.log(selectedUser.username)
        console.log(selectedUser)
        setSelectedUser(selectedUser)
    }

    useEffect(()=>{
        const getUsers = async () => {
            const users = await apiGetUsers();
            console.log(users);
            setSearchResult(users);//get the first 15 users
        }
        getUsers()
    },[])
    

    return (
        <div className="sideBarResultPanel" id="chats">
            <div className="top">
                <h3 className="sideBarResultTitle">Chats</h3>
                <div className="searchBox">
                    <Search />
                    <input
                        id="inputSearch"
                        placeholder="Search"
                        type="text"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="center">
                <ul className="userSelection">
                    {searchResult.map((user, key) => {
                        var isSelected = false;
                        if(selectedUser !== null){
                            isSelected = user.username === selectedUser.username; // Check if the index and key matches
                        }
                        const userClass = isSelected ? "active user" : "user"; // Define the class based on the selection
                        return (
                            <li key={key} className={userClass} onClick={()=>selectUserHandler(user, key)}>
                                <div className="profilePicCon">
                                    <img className="profilePic" src={process.env.REACT_APP_EMPTY_PROFILE_PIC} alt="profile_pic" />
                                </div>
                                <label className="userName">{user.username}</label>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className="foot">

            </div>
        </div>
    )
}

export default Chats