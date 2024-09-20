import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "../api/Auth";

export const store = configureStore({
    reducer:{
        [authApi.reducerPath] : authApi.reducer,
    },
    middleware : (getDefaultMiddleWare) =>
        getDefaultMiddleWare().concat(authApi.middleware),
    
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);