import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postUploadSlice = createApi({
  reducerPath: 'postUploadApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://digizenger.org/digizenger/api/v1' }),
  endpoints: (builder) => ({
    uploadPost: builder.mutation({
      query: (post) => ({
        url: '/posts/upload',
        method: 'POST',
        body: post,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});


export const { useUploadPostMutation } = postUploadSlice;
