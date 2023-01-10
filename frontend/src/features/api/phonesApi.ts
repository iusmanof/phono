import { apiSlice } from './apiSlice'

const phonesApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPhones: build.query({
        query: () => '/phones',
        providesTags: ['Phones'],
    }),
    postPhone: build.mutation({
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
    patchPhone: build.mutation({
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
    deletePhone: build.mutation({
        query: (id) => ({
            url: `/phones/${id}`,
            method: 'DELETE',
            credentials: 'include'
        })
    }),

  }),
  overrideExisting: false,
})

export const {  useGetPhonesQuery, usePostPhoneMutation, usePatchPhoneMutation, useDeletePhoneMutation } = phonesApi