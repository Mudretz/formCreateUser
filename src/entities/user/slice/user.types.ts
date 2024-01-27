import { Option } from "@src/shared/types/common";

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
    sex: Option | null;
}

export interface UserAdvantages {
    advantages: {
        advantage: string
    }[];
    checkboxes: number[],
    radioOption: string;
}
