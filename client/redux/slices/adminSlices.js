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
            state.currentUser = action.payload.user;
        },
        [registerAdmin.fulfilled]: (state, action) => {
            // state.currentAdmin = action.payload.admin;
            // state.adminToken = action.payload.adminToken;
        },
        [registerAdmin.rejected]: (state, action) => {
            // state.currentUser = action.payload.user;
        },
        [adminLogin.fulfilled]: (state, action) => {
            state.currentAdmin = action.payload.admin;
            state.adminToken = action.payload.adminToken;
        },
    }
});

export const {
    logout
} = adminSlice.actions;
export default adminSlice.reducer;
