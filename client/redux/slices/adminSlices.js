import { createSlice } from "@reduxjs/toolkit";
import { registerAdmin, getAdminDetails, adminLogin } from "redux/actions/adminAction";

let adminToken = null
if (typeof window !== "undefined") {
    adminToken = sessionStorage.getItem("adminToken");
}
const adminSlice = createSlice({
    name: "admin",
    initialState: {
        currentAdmin: null,
        adminToken: adminToken,
        pending: false,
        error: null,
    },
    reducers: {
        logout: (state) => {
            sessionStorage.removeItem("adminToken");
            state.currentAdmin = null;
        },
    },
    extraReducers: {
        // [userLogin.fulfilled]: (state, action) => {
        //     state.currentUser = action.payload.user;
        //     state.userToken = action.payload.userToken;
        // },
        [getAdminDetails.fulfilled]: (state, action) => {
            state.currentAdmin = action.payload.admin;
        },
        [registerAdmin.fulfilled]: (state, action) => {
            // state.currentAdmin = action.payload.admin;
            // state.adminToken = action.payload.adminToken;
        },
        [adminLogin.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [adminLogin.pending]: (state, action) => {
            state.pending = true;
        },
        [adminLogin.fulfilled]: (state, action) => {
            state.pending = false;
            state.currentAdmin = action.payload.admin;
            state.adminToken = action.payload.adminToken;
        },
    }
});

export const {
    logout
} = adminSlice.actions;
export default adminSlice.reducer;
