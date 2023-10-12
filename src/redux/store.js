import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slice/authSlice.js'

export default configureStore({
    reducer:{
        auth: authReducer
    }
})
