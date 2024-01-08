import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query";
import { baseUrl } from "./baseUrl";

export const rootApi = createApi({
    reducerPath: "rootApi",
    baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
    endpoints: () => ({}),
});