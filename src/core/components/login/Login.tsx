import { useNavigate } from "react-router-dom";
import Gate from "../gate/Gate.tsx";
import {useAuthContext} from "../../contexts/authcontext/auth.use.tsx";
import {useState} from "react";
import MessageError from "../messageError/Message.error.tsx";


const Login = () => {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();
    const { login } = useAuthContext();

    const handlerLogin = async (username: string, password:string): Promise<void> =>{
        try{
            await login(username, password)
            navigate('/boards')
        }catch(error){
                 const msg = error as string;
                setError(true)
                setErrorMessage(msg)
        }
    }
    const handlerLink = ()=>{
        navigate("/sign")
    }

    return (
        <div className={"mt-24"}>
            <Gate handlerButton={handlerLogin} handlerLink={handlerLink} nameButton="Login" nameLink="Create an account"/>
            {error && <MessageError message={errorMessage}/>}
        </div>


    );
};

export default Login;
