import { TypedUseSelectorHook,useDispatch,UseDispatch, useSelector, UseSelector } from "react-redux";
import type { AppDispatch, RootState } from "../feature/store";

export const useAppDispatch = () =>  useDispatch<AppDispatch>();
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector;
