import {providerAuthInterface} from "./interface/auth.interface.ts";
import {authContext} from "./auth.context.tsx";
import {useEffect, useState} from "react";
import {boardApi} from "../../apis/board.api.ts";
import boardConstants from "../../constants/board.constants.ts";

function AuthProvider({ children }: providerAuthInterface): JSX.Element{
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [tkn, setTkn] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const savedToken: string | null = window.localStorage.getItem(
            boardConstants.tokenKey
        );
        if(savedToken) setIsAuthenticated(true)
    }, []);
    async function login(email: string, password: string):Promise<void>{
        try{
           const response = await boardApi.post('/user/',{email, password});
           if (response.status === 200){
               const { message } = response.data;
               setMessage(message)
           }
        }catch(error){
           throw new Error("Error into authenticate")
        }
    }
    async function signup( email: string, password: string){
        try{
            const response = await boardApi.post("/sign", {
                email,
                password
            });
            const { token } = response.data;
            window.localStorage.setItem(boardConstants.tokenKey, token);
            setIsAuthenticated(true);
            setTkn(token)
            return;
        }catch(error){
            throw new Error("Fail into authenticate")
        }
    }

    function logout(){
        window.localStorage.removeItem(boardConstants.tokenKey);
        setIsAuthenticated(false)
    }
    return (
        <authContext.Provider value={{isAuthenticated, tkn, message,signup, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;