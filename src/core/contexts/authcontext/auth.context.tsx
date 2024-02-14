import {authContextInterface} from "./interface/auth.interface.ts";
import {createContext} from "react";

//Implementing values into the context
const authContextValue: authContextInterface={
    isAuthenticated: false,
    id: null,
    message: '',
    login: async () => {},
    logout: () => {},
    signup: async () => {}
}
//Implementing the context
export const authContext = createContext<authContextInterface>(authContextValue)