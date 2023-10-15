import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IAuthData, IAuthState} from "./types";

const initialState: IAuthState = {
    authData: {
        phone: "",
        email: ""
    }
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authReceveid: (state, action: PayloadAction<IAuthData>) => {
            state.authData = action.payload;
        }
    }
});

const { reducer: authReducer, actions } = authSlice;
export const {
    authReceveid,
} = actions;

export default authReducer;

