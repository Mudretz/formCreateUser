import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
    IPersonalInfoData,
    IPersonalInfoState
} from "./types.ts";

const initialState: IPersonalInfoState = {
    personalInfo: {
        nickname: "",
        name: "",
        surname: "",
        sex: {
            value: "",
            label: ""
        }
    }
};

const personalInfoSlice = createSlice({
    name: "personalInfo",
    initialState,
    reducers: {
        personalInfoReceived: (state, action: PayloadAction<IPersonalInfoData>) => {
            state.personalInfo = action.payload;
        },
    }
});

const { reducer: personalInfoReducer, actions } = personalInfoSlice;
export const {
    personalInfoReceived
} = actions;

export default personalInfoReducer;

