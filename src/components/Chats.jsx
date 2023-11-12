import { useEffect, useState } from "react"
import "../styles/sidebarResult.css"
import { Search } from "react-bootstrap-icons"
import { apiGetUsers, searchPeople } from "../api/ChatApi";
import { responsivePropType } from "react-bootstrap/esm/createUtilityClasses";

const Chats = () => {

    const [searchResult, setSearchResult] = useState([]);

    const handleInputChange = async (e) => {
        const inputValue = e.target.value;
        const response = await searchPeople(inputValue)
        setSearchResult(response)
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
                        return (
                            <li key={key} className="user">
                                <div className="profilePicCon">
                                    <img className="profilePic" src="https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1080x1080.png" alt="" />
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

const users = [
    {
        profilePic: "https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1080x1080.png",
        userName: "Jeremy"
    },
    {
        profilePic: "https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1080x1080.png",
        userName: "Alice"
    },
    {
        profilePic: "https://woodfibreinsulation.co.uk/wp-content/uploads/2017/04/blank-profile-picture-973460-1-1-1080x1080.png",
        userName: "Bob"
    }
];

export default Chats