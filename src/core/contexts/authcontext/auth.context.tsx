import {authContextInterface} from "./interface/auth.interface.ts";
import {createContext} from "react";

//Implementing values into the context
const authContextValue: authContextInterface={
    isAuthenticated: false,
    token: null,
    login: async () => {},
    logout: () => {},
    signup: async () => {}
}
//Implementing the context
export const authContext = createContext<authContextInterface>(authContextValue)