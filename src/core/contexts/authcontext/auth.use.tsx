import {useContext} from "react";
import {authContext} from "./auth.context.tsx";

export function useAuthContext(){
    return useContext(authContext)
}