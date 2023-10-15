import { RootState } from "src/store/store.ts";
import {IPersonalInfoData} from "src/components/Pages/CreateUserPage/StepsPage/PersonalInfoPage/store/types.ts";

export const getPersonalInfo = (state: RootState): IPersonalInfoData => {
    return state.personalInfo.personalInfo;
};