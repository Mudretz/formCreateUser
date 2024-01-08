import { createSlice } from "@reduxjs/toolkit";
import { UserState } from "./types";

const initialState: UserState = {
    contacts: {
        phone: "",
        email: "",
    },
    userInfo: {
        nickname: "",
        name: "",
        surname: "",
        sex: null,
    },
    advantages: {
        advantages: [],
        checkboxes: [],
        radioOption: "",
    },
    aboutMe: "",
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {

    }
});

export const {
    reducer: userReducer,
    actions: {}
} = userSlice;