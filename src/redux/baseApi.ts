import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// create base api
const baseApi = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_SERVER_BASE_URL,
    }),
    tagTypes: ["products"],
    endpoints: () => ({})
})


export default baseApi;