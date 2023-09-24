import {RootState} from "src/store/store.ts";
import {IAuthState} from "src/components/Pages/AuthPage/store/types.ts";
export const getAuthState = (state: RootState): IAuthState => {
    return state.auth;
};