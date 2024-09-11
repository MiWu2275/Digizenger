import {createApi,fetchBaseQuery, } from "@reduxjs/toolkit/query/react" ;

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://englishacademy.lmsmm.com/api",
    }),
    endpoints: (builder) => ({
        loginUser : builder.mutation({
            query : (body : {email: string ; password: string}) =>{
                return{
                    url : "/login",
                    method: "post",
                    body: JSON.stringify(body), // Send email and password as JSON in the body
                    headers: {
                        'Content-Type': 'application/json', // Set content type to JSON
                    },
                };
            },
        }),
        registerUser : builder.mutation({
            query : (body : {name: string ; email: string; password : string ; password_confirmation: string}) =>{
                return{
                    url : "/register",
                    method: "post",
                    body: JSON.stringify(body), // Send email and password as JSON in the body
                    headers: {
                        'Content-Type': 'application/json', // Set content type to JSON
                    },
                };
            },
        }),
    }),
})

export const {useLoginUserMutation,useRegisterUserMutation} = authApi;