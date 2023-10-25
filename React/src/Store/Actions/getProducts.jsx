import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { PRODUCTS, baseUrl } from "../../API/Api";
import Cookie from "cookie-universal";

const cookie = Cookie();
const token = cookie.get('userToken');


export const getProducts = createAsyncThunk(
    'ProductsSlice/getProducts',
    async (arg, { rejectWithValue }) => {
        try {
            let Pr = await axios.get(`${baseUrl}/${PRODUCTS}`, {
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
