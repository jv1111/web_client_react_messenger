import { configureStore } from "@reduxjs/toolkit"
import authReducer from './slice/authSlice.js'
import chatReducer from './slice/chatSlice.js'

export default configureStore({
    reducer:{
        auth: authReducer,
        chat: chatReducer
    }
})
