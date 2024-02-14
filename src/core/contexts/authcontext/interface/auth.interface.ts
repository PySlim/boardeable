import {ReactNode} from "react";

export interface authContextInterface{
    isAuthenticated: boolean;
    id: string | null;
    message: string;
    login: (username: string, password: string) => Promise<void>;
    logout: () => void;
    signup: (username: string, password: string) => Promise<void>;
}

export interface providerAuthInterface{
    children: ReactNode
}