import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import { RootState } from './store';

interface registerState {
    email : string | null;
    phone : string | null;
}

const initialState : registerState = {
    email : null,
    phone : null,
}

const registerInfoSlice = createSlice({
    name : "registerInfo",
    initialState,
    reducers : {
        setEmailOrPhone(state, action: PayloadAction<{email:string | null, phone: string | null}>){
            state.email = action.payload.email;
            state.phone = action.payload.phone;
        }
    }
})

export const {setEmailOrPhone} = registerInfoSlice.actions;
export default registerInfoSlice.reducer;
export const selectEmail = (state: RootState) => state.registerInfo.email;