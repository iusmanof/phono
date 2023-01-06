import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const phoneSlice = createApi({
    reducerPath: 'phoneSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:4001',
    }),
    tagTypes: ['Phones'],
    endpoints: (builder) => ({
        getPhones: builder.query({
            query: () => '/phones',
            providesTags: ['Phones'],
        }),
        postPhone: builder.mutation({
            query: (payload) => ({
                url: '/phones',
                method: 'POST',
                body: payload,
                headers: {
                    'Content-type': 'application-json; charset=UTF-8'
                }
            }),
            invalidatesTags: ['Phones']
        }),
        patchPhone: builder.mutation({
            query: (payload) => {
                const { id, ...body } = payload;
                return {
                    url: `/phones/${id}`,
                    method: 'PATCH',
                    body
                }
            },
            invalidatesTags: ['Phones']
        }),
        deletePhone: builder.mutation({
            query: (id) => ({
                url: `/phones/${id}`,
                method: 'DELETE',
                credentials: 'include'
            })
        }),
    })
})

export const { useGetPhonesQuery, usePostPhoneMutation, usePatchPhoneMutation, useDeletePhoneMutation } = phoneSlice