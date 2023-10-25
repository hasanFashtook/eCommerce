import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "../Actions/getUsers";
import { addUser } from "../Actions/addUser";
import { authRegister } from "../Actions/AuthRegister";
import { authLogin } from "../Actions/AuthLogin";
import Cookie from 'cookie-universal'
import { editUser } from "../Actions/editUser";

const cookie = Cookie();
let userToken = cookie.get('userToken');
let userDetails = cookie.get('userDetails');

const initialState = {
    // THIS STATES FOR ALL USERS
    error: null,
    loading: false,
    success: false,
    users: [],
    userAdded:false,
    // THIS STATES FOR CURRENT USER
    userInfo: userDetails || null,
    userToken: userToken || null,
    showControlPanel: false,
}
const usersSlice = createSlice({
    initialState,
    name: 'usersSlice',
    reducers: {
        resetState:(state)=>{
            state.success = false;
            state.error = null;
            state.userAdded = false;
            state.showControlPanel = false;
        },
        toggleState: (state) => {
            state.showControlPanel = !state.showControlPanel
        },
        removeCurrentUserDetails: (state) => {
            state = {
                loading: false,
                userInfo: null,
                userToken: null,
                error: null,
                success: false,
                showControlPanel: false
            }
            return state
        }
    },
    extraReducers: (builder) => {
        // register user reducer...
        builder.addCase(authRegister.fulfilled, (state, { payload }) => {
            state.userToken = payload.token;
            state.userInfo = payload.user
            state.userRole = payload.user.role
            state.loading = false
            state.success = true
            cookie.set('userToken', payload.token);
            cookie.set('userDetails', payload.user);
        });
        builder.addCase(authRegister.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        });
        builder.addCase(authRegister.rejected, (state, { payload }) => {
            state.success = false
            state.loading = false
            state.error = payload
        });

        // login user reducer
        builder.addCase(authLogin.fulfilled, (state, { payload }) => {
            state.loading = false
            state.userInfo = payload.user
            state.userToken = payload.token
            state.success = true
            cookie.set('userToken', payload.token);
            cookie.set('userDetails', payload.user);
        });
        builder.addCase(authLogin.pending, (state) => {
            state.loading = true
            state.error = null
        });
        builder.addCase(authLogin.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
        });


        // Get Users Reducer
        builder.addCase(getUsers.fulfilled, (state, { payload }) => {
            state.users = payload;
            state.loading = false;
            state.success = true;
        });
        builder.addCase(getUsers.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        });
        builder.addCase(getUsers.rejected, (state, { payload }) => {
            state.success = false
            state.loading = false
            state.error = payload
        });

        // Add User Reducer
        builder.addCase(addUser.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
            state.userAdded = true;
        });
        builder.addCase(addUser.pending, (state) => {
            state.loading = true
            state.error = null
            state.success = false
        });
        builder.addCase(addUser.rejected, (state, { payload }) => {
            state.success = false
            state.loading = false
            state.error = payload
        });

        // Edit User Reducer
        builder.addCase(editUser.fulfilled, (state) => {
            state.loading = false;
            state.success = true;
            state.userAdded = true;
        });
        builder.addCase(editUser.pending, (state) => {
            state.loading = true
            state.userAdded = false
            state.error = null
            state.success = false
        });
        builder.addCase(editUser.rejected, (state, { payload }) => {
            state.success = false
            state.loading = false
            state.error = payload
        });
    }
});
export const {resetState, toggleState, removeCurrentUserDetails } = usersSlice.actions;
export default usersSlice.reducer;
