import { apiSlice } from './apiSlice'

const postsApi = apiSlice.injectEndpoints({
  endpoints: (build) => ({
    getPosts: build.query({
        query: () => '/posts',
        providesTags: ['Post'],
    }),
    // addNewPost: builder.mutation({}),
    // updatePost: builder.mutation({}),
    deletePost: build.mutation({
        query: (id) => ({
            url: `/posts/${id}`,
            method: 'DELETE',
            credentials: 'include'
        }),
        invalidatesTags: ['Post']
    }),
  }),
  overrideExisting: false,
})

export const { useGetPostsQuery, useDeletePostMutation } = postsApi