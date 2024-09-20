import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi ({
    reducerPath: "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl :"http//"
    }),
    endpoints: (builder)=>({
        loginUser : builder.mutation({
            query: (body :{eamil:string,password:string}) =>{
                return{
                    url: '',
                    method: '',
                    body : JSON.stringify(body),
                    headers : {
                        'Content-Type' : 'application/json'
                    }
                }
            }
        }),

        registerUser: builder.mutation ({
            query : (body:{email:string,password:string}) =>{
                return{
                    url : '',
                    method: '',
                    body : JSON.stringify(body),
                    headers:{
                        'Content-Type' : 'applicaton/json'
                    }
                }
            }
        })
    })
})