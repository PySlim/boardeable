const InputForm = () => {
    return (
        <div className={"mb-4 flex justify-center items-center flex-col"}>
            <div className={" w-[320px]"}>
                <p>Username</p>
            </div>
            <div className={"mt-2"}>
                <input type={"text"} className={"border border-gray-400 w-[320px] rounded-md h-[40px] py-2 px-2"}/>
            </div>
        </div>
    );
};

export default InputForm;