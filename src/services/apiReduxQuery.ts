import {createApi, fetchBaseQuery, FetchBaseQueryError} from "@reduxjs/toolkit/query/react";
import { IPostDataBody, IPostDataResponse } from "./apiReduxQuery.types";
import {SerializedError} from "@reduxjs/toolkit";

interface IPostAuth {
    login: string,
    password: string
}

export type ApiError = {
    data: {
        message?: string,
    },
    status: number
}

export type RequestError = ApiError | SerializedError | FetchBaseQueryError | undefined;

export const isObject = (obj: unknown): boolean =>
    typeof obj === "object" && !Array.isArray(obj) && obj !== null;

export const isApiError = (error: RequestError): error is ApiError =>
    Boolean(error && "data" in error && isObject(error))

export const apiReduxQuery = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080/api/"}),
    endpoints: (build) => ({
        postData: build.mutation<IPostDataResponse, IPostDataBody>({
            query: (body) => ({
                url: "bootcamp/frontend",
                method: "POST",
                body
            })
        }),
        authUser: build.mutation<void, IPostAuth>({
            query: ({ login, password}) => ({
                url:"auth/login",
                method: "POST",
                body: {
                    email: login,
                    password: password,
                    id: "123123213123"
                }
            })
        })
    })
});

export const { usePostDataMutation, useAuthUserMutation } = apiReduxQuery;