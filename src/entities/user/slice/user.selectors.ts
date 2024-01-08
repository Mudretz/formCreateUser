import { RootState } from "@src/app/store";

export const getUserContacts = (state: RootState) => {
    return state.user.userContacts;
};

export const getUserInfo = (state: RootState) => {
    return state.user.userInfo;
};

export const getUserAdvantages = (state: RootState) => {
    return state.user.userAdvantages;
};

export const getUserAbout = (state: RootState) => {
    return state.user.userAbout;
};
