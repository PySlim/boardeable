import Navbar from "../navbar/Navbar.tsx";
import Board from "../Board/Board.tsx";

const Boards = () => {

    const titulos = ["Título 1", "Título 2", "Título 3", "Título 4", "Título 5"];
    return (
        <div>
            <Navbar/>
            <div className={" ml-4 mr-4"}>
                <div className={"mx-auto max-w-screen-lg"}>
                    <div className={"mt-16"}>
                        <div className={"w-[130px]"}>
                            <div className={"w-[130px]"}>
                                <p className={"text-2xl font-bold"}>My Boards</p>
                            </div>
                            <div className={"mt-4"}>
                                <div className={"text-sm"}>Sort by</div>
                                <div className={"mt-2"}>
                                    <select name="" id="" className={"w-[130px] h-10 px-2 py-3 text-sm"}>
                                        <option value="created date">Created date</option>
                                        <option value="title">Title</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-8 grid grid-cols-1 gap-8 w-[82%] mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3"}>
                        {
                            titulos.map((title, index)=>(
                                <Board key={index} title={title}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Boards;