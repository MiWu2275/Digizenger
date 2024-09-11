import { TypedUseSelectorHook,useDispatch,UseDispatch, useSelector, UseSelector } from "react-redux";
import type { RootState, AppDispatch, } from "./Store";

export const useAppDispatch = () =>  useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
