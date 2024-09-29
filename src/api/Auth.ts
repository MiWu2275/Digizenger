import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const authApi = createApi ({
    reducerPath: "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl :"http://digizenger.org/digizenger/api/v1"
    }),
    endpoints: (builder)=>({
        registerUser: builder.mutation ({
            query : (formValue) =>{
                return{
                    url : '/auth/register',
                    method: 'post',
                    body : JSON.stringify(formValue),
                    headers:{
                        'Content-Type' : 'application/json'
                    }
                }
            }
        }),
        verifyEmailOrPhone: builder.mutation ({
            query : ({emailOrPhone,otp}) => {
                return{
                method: 'put',
                url: '/auth/verify-account?emailOrPhone=htetphyoemaung3363@gmail.com&otp=158103',
                body: JSON.stringify({ emailOrPhone, otp }), 
                headers:{
                    'Content-type' : 'application/json'
                }
            }
            }

        }),
        loginUser: builder.mutation({
            query: (credentials) => {
            return{
              url: '/auth/login',
              method: 'POST',
              body: credentials,
            }},
    })
})
})

export const {useRegisterUserMutation , useVerifyEmailOrPhoneMutation ,useLoginUserMutation } = authApi;