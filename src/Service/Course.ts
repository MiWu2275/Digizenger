import {createApi,fetchBaseQuery, } from "@reduxjs/toolkit/query/react" ;


export const courseApi = createApi({
    reducerPath : "courseApi",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://englishacademy.lmsmm.com/api",

        prepareHeaders: (headers) => {
            const user= localStorage.getItem('user');
            if (user) {
                const userObject = JSON.parse(user);
                const token = userObject.token;
                headers.set('Authorization', `Bearer ${token}`); // token ကို Authorization header ထဲထည့်
            }
      
            return headers;
        },
        }),
        endpoints: (builder) => ({
            getCourses: builder.query({
              query: () => '/course', // API endpoint URL
            }),
            getChaptersByCourseId: builder.query({
                query: (courseId) => `/chapter?course_id=${courseId}`, // API endpoint URL
              }),
        }),
})

export const {useGetCoursesQuery , useGetChaptersByCourseIdQuery} = courseApi;