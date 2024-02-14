import {useNavigate} from "react-router-dom";
import {useAuthContext} from "../../contexts/authcontext/auth.use.tsx";
import Gate from "../gate/Gate.tsx";
import {useState} from "react";
import MessageError from "../messageError/Message.error.tsx";


const Sign = () => {
    const [error, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const navigate = useNavigate();
    const { signup } = useAuthContext();

    const handlerLink = ()=>{
        navigate('/')
    }
    const handlerSign =  async(username: string , password: string)=>{
        try{
            await signup(username, password)
            navigate('/boards')
        }catch (error) {
            const msg = error as string;
            setError(true)
            setErrorMessage(msg)
        }

    }

    return (
        <div className={"mt-24"}>
            <Gate handlerButton={handlerSign} handlerLink={handlerLink} nameButton="Signup" nameLink="Login to your account"/>
            {error && <MessageError message={errorMessage}/>}
        </div>
    );
};

export default Sign;