import { useSelector, type TypedUseSelectorHook } from "react-redux";
import { RootState } from "../features/store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
