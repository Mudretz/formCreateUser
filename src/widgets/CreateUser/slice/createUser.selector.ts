import { RootState } from "@src/app/store";

export const getActiveStep = (state: RootState): number => {
    return state.createUser.activeStep;
};
