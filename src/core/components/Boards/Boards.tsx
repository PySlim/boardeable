import Navbar from "../navbar/Navbar.tsx";
import Board from "../Board/Board.tsx";
import BoardCreator from "../boardCreator/BoardCreator.tsx";
import boardApi from "../../apis/board.api.ts";
import React, { useState} from "react";
import ErrorModal from "../errorModal/error.modal.tsx";
import {useLoaderData} from "react-router-dom";
import {LoaderInterface} from "./loader.interface.ts";
import {BoardsStateObjectInterface} from "./boards.state.interface.ts";

const Boards = () => {
    const [errorMessage, setErrorMessage] = useState("")
    const [isError, setIsError] = useState(false)


    // @ts-ignore
    const { response, user_id} = useLoaderData<LoaderInterface>()
    const [boardsRequest, setBoardsRequest] = useState<BoardsStateObjectInterface[]>(response.data.data)

    const handlerCreateBoard = async (title: string, color: string)=>{
        try{
            const body = {
                title: title,
                color: color,
                user_id: user_id
            }
            const response = await boardApi.post('/board',body)
            setBoardsRequest([...boardsRequest,response.data.data[0]])

        }catch (error) {
            const msg  = error as string
            setErrorMessage(msg)
            setIsError(true)
        }
    }

    const onClose = ()=>{
        setIsError(false)
    }

    const handlerOptionSelect = async (event: React.ChangeEvent<HTMLSelectElement>)=>{
       const order = event.target.value as "created" | "title"
        if(order === "title"){
            setBoardsRequest([])
            const response = await boardApi.get(`/board/user/${user_id}?sort=title&user_id=${user_id}`)
            const newData = response.data.data
            setBoardsRequest([...newData]);
        }else if(order==="created"){
            setBoardsRequest([])
            const response = await boardApi.get(`/board/user/${user_id}?sort=created&user_id=${user_id}`)
            const newData = response.data.data
            setBoardsRequest([...newData]);
        }
    }

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
                                    <select name="" id="" className={"w-[130px] h-10 px-2 py-3 text-sm"} onChange={handlerOptionSelect}>
                                        <option value="created">Created date</option>
                                        <option value="title">Title</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"mt-8 grid grid-cols-1 gap-8 w-[82%] mx-auto px-4 sm:grid-cols-2 lg:grid-cols-3"}>
                        <BoardCreator handlerCreateBoard={handlerCreateBoard}/>
                        {
                            boardsRequest.map((board, index)=>(
                                <Board key={index} title={board.title} color={board.color} id={board.id}/>
                            ))
                        }
                    </div>
                    <ErrorModal errorMessage={errorMessage} showModal={isError} onClose={onClose}/>
                </div>
            </div>
        </div>
    );
};

export default Boards;