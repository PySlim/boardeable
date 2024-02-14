import Navbar from "../navbar/Navbar.tsx";
import {useLoaderData} from "react-router-dom";
import {LoaderInterface} from "./loader.interface.ts";
import {useState} from "react";
import boardApi from "../../apis/board.api.ts";
import MessageError from "../messageError/Message.error.tsx";
import {UserInterface} from "./user.interface.ts";

const Account = () => {
    const [isError, setIsError] = useState(false)
    const [messageError, setMessageError] = useState('')

    // @ts-ignore
    const {response} =  useLoaderData<LoaderInterface>()
    const { username, name, email, id } = response.data.data[0]

    const [userNameValue, setUserNameValue] = useState(username)
    const [nameValue, setNameValue] = useState(name)
    const [emailValue, setEmailValue] = useState(email)
    const [idValue, setIdValue] = useState(id)
    const [passwordValue, setPasswordValue] = useState('')

    const handlerClickButtonUpdate = async ()=>{
        try{
            const objectUpdate: UserInterface = {}
            if(userNameValue) objectUpdate.username=userNameValue
            if(nameValue) objectUpdate.name= nameValue
            if(emailValue) objectUpdate.email= emailValue
            if(passwordValue) objectUpdate.password = passwordValue

            if(Object.keys(objectUpdate).length !== 0){
                const userResponse = await boardApi.patch(`/user/${idValue}`,objectUpdate)
                const { username, name, email, id } = userResponse.data.data[0]
                setUserNameValue(username)
                setNameValue(name)
                setEmailValue(email)
                setIdValue(id)
                setIsError(false)
            }else{
                setIsError(true)
                setMessageError("There is no information to update")
            }

        }catch (error) {
            const msg = error as string
            setIsError(true)
            setMessageError(msg)
        }
    }

    return (
        <div>
            <Navbar/>
            <div className={"mx-auto max-w-screen-lg"}>
                <div className={"mt-6 sm:mt-16 ml-10 lg:ml-0"}>
                    <p className={"text-2xl font-bold"}>
                        {userNameValue}
                    </p>
                </div>
                <div className={"mt-10 sm:mt-20"}>
                    <div className={"max-w-[320px] mx-auto"}>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Username</p>
                            </div>
                            <div className={"mt-2"}>
                                <input className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"} value={userNameValue} onChange={(e)=>setUserNameValue(e.target.value)}/>
                            </div>
                        </div>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Name</p>
                            </div>
                            <div className={"mt-2"}>
                                <input type={"text"}
                                       className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"} value={nameValue} onChange={(e)=>setNameValue(e.target.value)}/>
                            </div>
                        </div>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Email</p>
                            </div>
                            <div className={"mt-2"}>
                                <input type={"text"}
                                       className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"} value={emailValue} onChange={(e)=>setEmailValue(e.target.value)}/>
                            </div>
                        </div>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Password</p>
                            </div>
                            <div className={"mt-2"}>
                                <input type={"password"}
                                       className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"} value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)}/>
                            </div>
                        </div>
                        <div className={"flex justify-center items-center mt-4"}>
                            <button
                                className={"w-[320px] h-[44px] bg-[#6D28D9] text-white font-bold rounded hover:bg-[#581cb8] focus:outline-none"} onClick={handlerClickButtonUpdate}>Update
                            </button>
                        </div>
                        <div className={"flex justify-center items-center mt-4 mb-4"}>
                            <button
                                className={"w-[320px] h-[44px] bg-[#FEF2F2] border border-[#DC2626] text-[#450A0A] font-bold rounded hover:bg-[#f1d1d1] focus:outline-none"} >Delete my account
                            </button>
                        </div>
                        {isError && <MessageError message={messageError}/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;