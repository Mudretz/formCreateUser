import { IOption } from "@src/components/common/CustomSelect/CustomSelect";

export interface UserState {
    contacts: Contacts;
    userInfo: UserInfo;
    advantages: Advantages;
    aboutMe: string;
}

export interface Contacts {
    phone: string;
    email: string;
}

export interface UserInfo {
    nickname: string;
    name: string;
    surname: string;
    sex: IOption | null;
}

export interface Advantages {
    advantages: string[];
    checkboxes: number[];
    radioOption: string;
}
