import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

export const authApi = createApi ({
    reducerPath: "authApi",
    baseQuery : fetchBaseQuery({
        baseUrl :"http://digizenger.org/digizenger/api/v1"
    }),
    endpoints: (builder)=>({
        // loginUser : builder.mutation({
        //     query: (body :{eamil:string,password:string}) =>{
        //         return{
        //             url: '',
        //             method: '',
        //             body : JSON.stringify(body),
        //             headers : {
        //                 'Content-Type' : 'application/json'
        //             }
        //         }
        //     }
        // }),

        registerUser: builder.mutation ({
            query : (formValue) =>{
                return{
                    url : '/auth/register',
                    method: '',
                    body : JSON.stringify(formValue),
                    headers:{
                        'Content-Type' : 'applicaton/json'
                    }
                }
            }
        })
    })
})

export const {useRegisterUserMutation} = authApi;