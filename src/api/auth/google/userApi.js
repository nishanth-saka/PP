import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
    reducerPath: 'userApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getLoginLink: builder.query({
            query: () => `sessions/oauth/google-login`
        })
    })
})

export const { useGetLoginLinkQuery } = userApi;