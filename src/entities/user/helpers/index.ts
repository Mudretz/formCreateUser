import { CreateUserRequest } from "../service/user.types";
import { UserState } from "../slice/user.types";

export const transformUserDataForApi = (data: UserState): CreateUserRequest => {
    const userInfo = {
        ...data.userInfo,
        sex: data.userInfo.sex?.label as string,
    };
    const userAdvantages = {
        ...data.userAdvantages,
        radioOption: data.userAdvantages.radioOption as number,
    };
    return {
        ...data.userContacts,
        ...userInfo,
        ...userAdvantages,
        ...data.userAbout,
    };
};
