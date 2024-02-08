import Navbar from "../navbar/Navbar.tsx";
import List from "../list/List.tsx";

const Folder = () => {
    return (
        <div>
            <Navbar/>
            <div className={"border border-black bg-orange-300 h-screen"}>
                <div className={"border border-black max-w-[928px] h-screen mx-auto"}>
                    <div className={"border border-red-600 mt-4 flex  gap-4"}>
                        <div>
                            <p className={"text-2xl font-bold"}>My board title</p>
                        </div>
                        <div>
                            <img src={"src/core/assets/ponts.svg"} alt="Menu" />
                        </div>
                    </div>
                    <div className={"border border-black mt-8"}>
                        <List/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Folder;