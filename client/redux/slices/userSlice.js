import { createSlice } from "@reduxjs/toolkit";
import { getUserDetails, userLogin } from "redux/actions/userActions";

let userToken = null
if (typeof window !== "undefined") {
    userToken = sessionStorage.getItem("userToken");
}
const userSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        userToken: userToken,
    },
    reducers: {
        logout: (state) => {
            sessionStorage.removeItem("userToken");
            state.currentUser = null;
        },
    },
    extraReducers: {
        [userLogin.fulfilled]: (state, action) => {
            state.currentUser = action.payload.user;
            state.userToken = action.payload.userToken;
        },
        [getUserDetails.fulfilled]: (state, action) => {
            state.currentUser = action.payload.user;
        }
    }
});

export const {
    logout, login
} = userSlice.actions;
export default userSlice.reducer;
