import { configureStore} from "@reduxjs/toolkit";
import { authApi } from "../Service/Auth";
import authReducer from "./AuthSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { courseApi } from "../Service/Course";
import courseReducer from "./CourseSlice";

export const store = configureStore({
    reducer: {
        auth : authReducer,
        course : courseReducer,
        [authApi.reducerPath] : authApi.reducer,
        [courseApi.reducerPath] : courseApi.reducer,
    },
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware()
        .concat(authApi.middleware)
        .concat(courseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
setupListeners(store.dispatch);