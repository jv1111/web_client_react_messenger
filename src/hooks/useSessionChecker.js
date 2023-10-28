import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from "../redux/slice/authSlice";
import { getSessionApi } from "../api/AuthApi"

const useSessionChecker = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)// access auth from redux authSlice

    useEffect(()=>{
        const getSession = async () => {
            const response = await getSessionApi();
            if (response.error) dispatch(logout())
            else dispatch(login(response)) //execute login function from redux authSlice
            setIsLoading(false)
        }
        getSession()
    },[])
    return { isLoading, auth }
}

export default useSessionChecker