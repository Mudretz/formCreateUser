import {RootState} from "@/store/store.ts";
import {IAuthData} from "@/components/Pages/AuthPage/store/types.ts";

export const getAuthState = (state: RootState): IAuthData => {
    return state.auth.authData;
};