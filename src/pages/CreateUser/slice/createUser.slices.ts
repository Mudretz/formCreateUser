import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { CreateUserState } from "./createUser.types";

const initialState: CreateUserState = {
    activeStep: 1
};

const createUserSlice = createSlice({
    name: "createUser",
    initialState,
    reducers: {
        stepReceived: (state, action: PayloadAction<number>) => {
            state.activeStep = action.payload
        },
        stepIncrease: (state) => {
            state.activeStep += 1;
        },
        stepDecrease: (state) => {
            state.activeStep -= 1;
        }
    }
});

const { reducer: createUserReducer, actions } = createUserSlice;
export const { stepReceived, stepIncrease, stepDecrease } = actions;

export default createUserReducer;

