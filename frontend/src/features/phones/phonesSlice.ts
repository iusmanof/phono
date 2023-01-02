import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { phones, randomPhone } from "./dataPhones";
import { fetchGetPeople } from "./phoneAPI";

export interface PhonesState {
    id: number;
    inches: number,
    price: string;
    color: string;
    type: string;
    raiting: number;
    urlImage: string;
}

const initialState: PhonesState[] = phones;

// request to API nodejs
// write later
export const getPhonesASync = createAsyncThunk(
    'phones/fetchGetPhones',
    async () => {
        const response = await fetchGetPeople()
        return response.data;
    }
)

export const phoneSlice = createSlice({
    name: 'phone',
    initialState,
    reducers: {
        post: (state) => { state.push(randomPhone) },
        deleteLastPhone: (state) => { state.pop() }
    }
})

export const { post, deleteLastPhone } = phoneSlice.actions;
export const selectPhone = (state: RootState) => state.phone;
export default phoneSlice.reducer
