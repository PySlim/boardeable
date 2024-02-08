import Navbar from "../navbar/Navbar.tsx";

const Account = () => {
    return (
        <div>
            <Navbar/>
            <div className={"mx-auto max-w-screen-lg"}>
                <div className={"mt-6 sm:mt-16 ml-10 lg:ml-0"}>
                    <p className={"text-2xl font-bold"}>
                        My Account
                    </p>
                </div>
                <div className={"mt-10 sm:mt-20"}>
                    <div className={"max-w-[320px] mx-auto"}>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Username</p>
                            </div>
                            <div className={"mt-2"}>
                                <input className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}/>
                            </div>
                        </div>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Name</p>
                            </div>
                            <div className={"mt-2"}>
                                <input type={"text"}
                                       className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}/>
                            </div>
                        </div>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Email</p>
                            </div>
                            <div className={"mt-2"}>
                                <input type={"text"}
                                       className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}/>
                            </div>
                        </div>
                        <div className={"mb-4 flex justify-center items-center flex-col"}>
                            <div className={" w-[320px]"}>
                                <p>Password</p>
                            </div>
                            <div className={"mt-2"}>
                                <input type={"password"}
                                       className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}/>
                            </div>
                        </div>
                        <div className={"flex justify-center items-center mt-4"}>
                            <button
                                className={"w-[320px] h-[44px] bg-[#6D28D9] text-white font-bold rounded hover:bg-[#581cb8] focus:outline-none"}>Update
                            </button>
                        </div>
                        <div className={"flex justify-center items-center mt-4"}>
                            <button
                                className={"w-[320px] h-[44px] bg-[#FEF2F2] border border-[#DC2626] text-[#450A0A] font-bold rounded hover:bg-[#f1d1d1] focus:outline-none"}>Delete my account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;