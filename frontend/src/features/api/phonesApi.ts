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
        filterByColor: build.query({
            query: (color) => ({
                url: `/phones?color=${color}`,
                method: 'GET',
            }),
        }),
        filterByPrice: build.query({
            query: (price: { price_from?: number, price_to?: number }) => {
                const { price_from, price_to } = price;

                if (price_from === undefined) {
                    return ({
                        url: `/phones?price_to=${price_to}`,
                        method: 'GET'
                    })
                }

                if (price_to === undefined) {
                    return ({
                        url: `/phones?price_from=${price_from}`,
                        method: 'GET'
                    })
                }

                return ({
                    url: `/phones?price_from=${price_from}&price_to=${price_to}`,
                    method: 'GET'
                })
            }


        })
    }),
    overrideExisting: false,
})

export const { useGetPhonesQuery, usePostPhoneMutation, usePatchPhoneMutation, useDeletePhoneMutation, useLazyFilterByColorQuery, useLazyFilterByPriceQuery } = phonesApi