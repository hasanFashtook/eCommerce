import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, login } from "../../API/Api";

export const authLogin = createAsyncThunk(
    'usersSlice/authLogin',
    async (form, { rejectWithValue }) => {
        try {
            let Pr = await axios.post(`${baseUrl}/${login}`, form)
            return Pr.data
        } catch (error) {
            // return custom error message from backend if present
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
