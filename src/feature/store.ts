import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../api/Auth";
import chatReducer from './chatSlice.ts'

export const store = configureStore({
    reducer:{
        chat: chatReducer,
        [authApi.reducerPath] : authApi.reducer,
    },
    middleware : (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(authApi.middleware),
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);