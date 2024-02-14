import {providerAuthInterface} from "./interface/auth.interface.ts";
import {authContext} from "./auth.context.tsx";
import {useEffect, useState} from "react";
import boardConstants from "../../constants/board.constants.ts";
import boardApi from "../../apis/board.api.ts";

function AuthProvider({ children }: providerAuthInterface): JSX.Element{
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)
    const [id, setId] = useState<string>("");
    const [message, setMessage] = useState<string>("");

    useEffect(() => {
        const savedToken: string | null = window.localStorage.getItem(
            boardConstants.tokenKey
        );
        if(savedToken) setIsAuthenticated(true)
    }, []);
    async function login(username: string, password: string):Promise<void>{
        try{
           const response = await boardApi.post('/user/login',{username, password});
            //const { ok } = response.data;
            window.localStorage.setItem(boardConstants.tokenKey, response.data.data[0]['token']);
            setIsAuthenticated(true);
            setId(response.data.data[0]['id'])
            window.localStorage.setItem(boardConstants.IDUSER,response.data.data[0]['id'])
            return;
         }catch(error){
            const msg = error as string
            setMessage(msg)
            throw error;
        }
    }
    async function signup( username: string, password: string){
        try{
            const response = await boardApi.post("/user/sign", {
                username,
                password
            });
            const { token, id } = response.data.data[0];
            window.localStorage.setItem(boardConstants.tokenKey, token);
            setIsAuthenticated(true);
            setId(id)
            window.localStorage.setItem(boardConstants.IDUSER,id)
            return;
        }catch(error){
            const msg = error as string
            setMessage(msg)
            throw error;
        }
    }
    
    function logout(){
        window.localStorage.removeItem(boardConstants.tokenKey);
        window.localStorage.removeItem(boardConstants.IDUSER);
        setIsAuthenticated(false)
    }
    return (
        <authContext.Provider value={{isAuthenticated, id, message,signup, login, logout}}>
            {children}
        </authContext.Provider>
    )
}

export default AuthProvider;