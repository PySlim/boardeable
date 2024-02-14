import {GatePropsInterface} from "./gate.props.interface.ts";
import {useState} from "react";

const Gate = ({nameButton, nameLink, handlerButton, handlerLink}: GatePropsInterface) => {
    const [userName, setUserName] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handlerButtonClick = ()=>{
        handlerButton(userName,password);
    }
    return (
        <div>
            <div className={" flex justify-center items-center"}>
                <div>
                    <img src={"src/core/assets/Vector.svg"} alt={"logg"} height={"96"} width={"96"}/>
                </div>
            </div>
            <div className={"mt-9 flex justify-center items-center"}>
                <p className={" h-[72px]  w-[320px] text-4xl font-semibold text-center"}>
                    Welcome to Boardable
                </p>
            </div>
            <div className={"mt-9  flex justify-center items-center flex-col"}>
                <div className={" w-[320px]"}>
                    <p>Username</p>
                </div>
                <div className={"mt-2"}>
                    <input className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"} onChange={(e)=>setUserName(e.target.value)}/>
                </div>
            </div>
            <div className={"mt-4 flex justify-center items-center flex-col"}>
                <div className={" w-[320px]"}>
                    <p>Password</p>
                </div>
                <div className={"mt-2"}>
                    <input type={"password"}
                           className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
            </div>
            <div className={"flex justify-center items-center mt-4"}>
                <button
                    className={"w-[320px] h-[44px] bg-[#6D28D9] text-white font-bold rounded hover:bg-[#581cb8] focus:outline-none"}
                    onClick={handlerButtonClick}>{nameButton}
                </button>
            </div>
            <div className={"mt-8  flex justify-center items-center"}>
                <div className={"min-w-[143px] h-[24px] flex justify-center items-center"} onClick={handlerLink}>
                    <div>
                        <p className={" text-[14px] font-semibold text-center text-[#6D28D9]"}>
                            {nameLink}
                        </p>
                    </div>
                    <div>
                        <img src={"src/core/assets/arrow-right.svg"} alt={"rows"}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gate;