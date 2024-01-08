import { RootState } from "@src/app/store";
import { IPersonalInfoData } from "./types";

export const getPersonalInfo = (state: RootState): IPersonalInfoData => {
    return state.personalInfo.personalInfo;
};