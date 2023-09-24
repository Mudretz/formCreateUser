import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {IAuthState} from "src/components/Pages/AuthPage/store/types.ts";

const initialState: IAuthState = {
    phone: "",
    email: ""
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        authReceveid: (state, action: PayloadAction<IAuthState>) => {
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        }
    }
});

const { reducer: authReducer, actions } = authSlice;
export const {
    authReceveid,
} = actions;

export default authReducer;

