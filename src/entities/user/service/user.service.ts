import { rootApi } from "@src/shared/api/rootApi";
import { CreateUserRequest } from "./user.types";

const userApi = rootApi.injectEndpoints({
    endpoints: (build) => ({
        createUser: build.mutation<void, CreateUserRequest>({
            query: (arg) => ({
                url: "test/",
                method: "POST",
                body: arg,
            }),
        }),
    }),
});

export const { useCreateUserMutation } = userApi;
