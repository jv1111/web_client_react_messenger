const TopChatInfo = ({selectedUser}) => {
    var username = "";
    if(selectedUser!==null){
        username = selectedUser.username
    }
    return(
        <div id="topChatInfo">
            <div className="profilePicCon">
                <img src={process.env.REACT_APP_EMPTY_PROFILE_PIC} alt="image" />
            </div>
            <div className="tciProfileName">
                <label className="profile_name">
                {username}
                </label>
            </div>
        </div>
    )
}

export default TopChatInfo