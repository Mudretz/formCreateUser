import { RootState } from "..";

export const getStep = (state: RootState): number => {
    return state.step.entities;
};