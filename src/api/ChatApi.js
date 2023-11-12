import axios from "axios";
import { apiErrorHandler } from "../utils/apiErrorHandler";
axios.defaults.baseURL = process.env.REACT_APP_API_KEY//set base url for every request
axios.defaults.withCredentials = true; // Enable passing credentials on cookies with every request. This is required for our server to save cookies on the client's browser.

const searchPeople = async (username) => {
    try{
        const response = await axios.get('/chat/findContact', {
            params: {
                username: username,
            },
        });
        console.log(response)
        return response.data;
    }catch(error){
        return apiErrorHandler(error)
    }
}

const apiGetUsers = async () => {
    try{
        const response = await axios.get('/chat/getUsers');
        console.log(response)
        return response.data;
    }catch(error){
        return apiErrorHandler(error)
    }
}

export {
    searchPeople,
    apiGetUsers
}