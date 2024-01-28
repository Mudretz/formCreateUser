import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    UserAbout,
    UserAdvantages,
    UserContacts,
    UserInfo,
    UserState,
} from "./user.types";

const initialState: UserState = {
    userContacts: {
        phone: "",
        email: "",
    },
    userInfo: {
        nickname: "",
        name: "",
        surname: "",
        sex: null,
    },
    userAdvantages: {
        advantages: [""],
        checkboxes: [],
        radioOption: null,
    },
    userAbout: {
        text: "",
    },
};

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        userContactsReceived: (state, action: PayloadAction<UserContacts>) => {
            state.userContacts = action.payload;
        },
        userInfoReceived: (state, action: PayloadAction<UserInfo>) => {
            state.userInfo = action.payload;
        },
        userAdvantagesReceived: (
            state,
            action: PayloadAction<UserAdvantages>,
        ) => {
            state.userAdvantages = action.payload;
        },
        userAboutReceived: (state, action: PayloadAction<UserAbout>) => {
            state.userAbout = action.payload;
        },
        userClear: () => initialState,
    },
});

export const {
    reducer: userReducer,
    actions: {
        userContactsReceived,
        userInfoReceived,
        userAdvantagesReceived,
        userAboutReceived,
        userClear,
    },
} = userSlice;
