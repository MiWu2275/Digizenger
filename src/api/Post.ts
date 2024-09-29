import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postUploadSlice = createApi({
  reducerPath: 'postUploadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://digizenger.org/digizenger/api/v1' }),
  endpoints: (builder) => ({
    uploadPost: builder.mutation({
      query: (postData) => ({
        url: '/posts/upload',
        method: 'POST',
        body: postData,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
    getPost : builder.query({
      query : ({pageCount}) => ({
        url :`posts/getPost?_page=${pageCount}&_limit=10`,
      })
    })
  }),
});


export const { useUploadPostMutation, useGetPostQuery } = postUploadSlice;
