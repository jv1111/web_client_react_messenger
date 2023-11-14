import { createSlice } from "@reduxjs/toolkit";

export const chatSlice = createSlice({
    name: "chat",
    initialState: {
        selectedUser: {

        }
    },
    reducers: {
        select: (state, action) => {
            console.log("select slice");
            state.selectedUser = action.payload;//set user to passed user object
        },
    }
})

export const { select } = chatSlice.actions
export default chatSlice.reducer;