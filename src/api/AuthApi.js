import axios from "axios";
import { apiErrorHandler } from "../utils/apiErrorHandler";
axios.defaults.baseURL = process.env.REACT_APP_API_KEY//set base url for every request
axios.defaults.withCredentials = true; // Enable passing credentials on cookies with every request. This is required for our server to save cookies on the client's browser.

// The 'async' keyword here is used to make sure the function runs asynchronously,
// allowing us to wait for it to finish before moving on to the next tasks.
const loginApi = async (username, password) => {
    try{
        const response = await axios.post('/auth/login', {
            //this is the body of the request
            username,
            password
        });
        console.log(response)
        return response.data;
    }catch(error){
        return apiErrorHandler(error)
    }
}

const registerApi = async (userData) => {
    try{
        const data = {...userData, authType: "local"}
        const response = await axios.post("/auth/register", data)
        console.log(response)
        return response.data;
    }
    catch(error){
        return apiErrorHandler(error)
    }
}

const getSessionApi = async () => {
    try {
        const response = await axios.get("/auth/login")
        console.log(response);
        return response.data;
    }catch(error){
        return apiErrorHandler(error)
    }
}

const logoutApi = async () => {
    try {
        const response = await axios.delete("/auth/logout");
        console.log(response)
        return response.data;
    } catch (error) {
        return apiErrorHandler(error)
    }
}

export {
    loginApi,
    registerApi,
    getSessionApi,
    logoutApi
}