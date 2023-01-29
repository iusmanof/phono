import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    reducerPath: 'apiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4000/',
        headers: {
            'Access-Control-Allow-Origin': 'localhost:4000'
        }
    }),
    tagTypes: ['Post', 'Phones'],
    endpoints: () => ({}),
})