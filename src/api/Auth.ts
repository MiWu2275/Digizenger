import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';


export const authApi = createApi ({
    reducerPath: "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl :"http://digizenger.org/digizenger/api/v1"
    }),
    endpoints: (builder)=>({
        registerUser: builder.mutation ({
            query : ({firstName,lastName,email,password,phone,gender,country,city}) =>{
                return{
                    url : '/auth/register',
                    method: 'post',
                    body : JSON.stringify({firstName,lastName,email,password,phone,gender,country,city}),
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
        }),

        resendCode: builder.mutation({
            query: (emailOrPhone) =>{
                return{
                    url:`resend-code?emailOrPhone=${emailOrPhone}`,
                    method: 'put',
                    headers:{
                        'Contdnt-type' : 'application/json'
                    }
                }
            }
        })
})
})

export const {useRegisterUserMutation , useVerifyEmailOrPhoneMutation ,useLoginUserMutation , useResendCodeMutation} = authApi;