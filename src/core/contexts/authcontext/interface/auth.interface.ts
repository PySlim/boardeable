import {ReactNode} from "react";

export interface authContextInterface{
    isAuthenticated: boolean;
    token: string | null;
    message: string;
    login: (email: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (email: string, password: string, confirmationPassword: string) => void;
}

export interface providerAuthInterface{
    children: ReactNode
}