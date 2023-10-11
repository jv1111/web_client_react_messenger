import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_KEY//set base url for every request
axios.defaults.withCredentials = true; // Enable passing credentials on cookies with every request. This is required for our server to save cookies on the client's browser.

// The 'async' keyword here is used to make sure the function runs asynchronously,
// allowing us to wait for it to finish before moving on to the next tasks.
const loginApi = async (usernameOrEmail, password) => {
    try{
        const response = await axios.post('/auth/login', {
            //this is the body of the request
            usernameOrEmail,
            password
        });
        console.log(response.data);
        return response.data;
    }catch(error){
        console.log(error);
        return error;
    }
}

const registerApi = async (userData) => {
    try{
        const response = await axios.post("/auth/register", userData)
        console.log(response.data);
        return response.data;
    }
    catch(error){
        console.log(error);
        return error;
    }
}

export {
    loginApi,
    registerApi
}