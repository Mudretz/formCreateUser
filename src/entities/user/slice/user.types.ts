import { IOption } from "@src/components/common/CustomSelect/CustomSelect";

export interface UserState {
    userContacts: UserContacts;
    userInfo: UserInfo;
    userAdvantages: UserAdvantages;
    userAbout: string;
}

export interface UserContacts {
    phone: string;
    email: string;
}

export interface UserInfo {
    nickname: string;
    name: string;
    surname: string;
    sex: IOption | null;
}

export interface UserAdvantages {
    advantages: string[];
    checkboxes: number[];
    radioOption: string;
}
