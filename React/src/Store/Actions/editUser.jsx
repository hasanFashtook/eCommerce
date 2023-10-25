import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../API/Api";
import Cookie from "cookie-universal";

const cookie = Cookie();
const token = cookie.get('userToken');
export const editUser = createAsyncThunk(
    'usersSlice/editUser',
    async ({form,path}, { rejectWithValue }) => {
        try {
            let Pr =  await axios.post(`${baseUrl}/user/edit/${path}`, form, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            const data = await Pr.data;
            return data
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
