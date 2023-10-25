import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl, register } from "../../API/Api";

export const authRegister = createAsyncThunk(
    'usersSlice/authRegister',
    async (form, { rejectWithValue }) => {
        try {
            let Pr = await axios.post(`${baseUrl}/${register}`, form);
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
