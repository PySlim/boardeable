const Navbar = () => {
    return (
        <div className={"mr-4 ml-4 h-[96px]"}>
            <div className={"mx-auto max-w-screen-xl h-[96px]"}>
                <div className={"mt-[27px] mb-[27px] flex items-center justify-between"}>
                    <div className={"flex items-center"}>
                        <img src={"src/core/assets/Vector.svg"} alt={"logo"} height={"36"} width={"36"}/>
                        <p className={"ml-1 text-2xl font-bold"}>
                            Boardable
                        </p>
                    </div>
                    <div>
                        <button className={"border border-gray-700 py-[8px] px-[2px] rounded-lg sm:px-[12px]"}>My Account</button>
                        <button className={"bg-[#E5E5E5] py-[8px] px-[12px] ml-4 rounded-lg"}>Logout</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;