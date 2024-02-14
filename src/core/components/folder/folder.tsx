import Navbar from "../navbar/Navbar.tsx";
import List from "../list/List.tsx";
import points from "../../assets/points.svg"
import {useLoaderData, useNavigate} from "react-router-dom";
import {FolderLoaderInterface} from "./interfaces/folder.loader.interface.ts";
import {ChangeEvent, useState} from "react";
import {ListObjectInterface} from "../list/interfaces/list.object.interface.ts";
import boardApi from "../../apis/board.api.ts";

const Folder = () => {
    // @ts-ignore
    const { response, board }  = useLoaderData<FolderLoaderInterface>()
    
    const [dataList, setDataList] = useState<ListObjectInterface[]>(response.data.data)
    const [boardName, setBoardName] = useState(board.data.data[0].title)
    const [showSave, setShowSave] = useState(false)

    const navigate = useNavigate()
    const handlerOnChangeInput = (event: ChangeEvent<HTMLInputElement>)=>{
        setBoardName(event.target.value)
    }
    const handlerClickSaveButton = async ()=>{
        try{
            const body ={
                title: boardName
            }
            const response = await boardApi.patch(`/board/${board.data.data[0].id}`, body)
            setBoardName(response.data.data[0].title)
        }catch (error) {
            console.log(error)
        }
    }
    const handlerClickEditTitleBoar = ()=>{
        setShowSave(!showSave)
    }

    const handlerClickNavigateBoard = ()=>{
        navigate('/boards')
    }


    return (
        <div>
            <Navbar/>
            <div style={{backgroundColor: board.data.data[0].color}} className={"border border-black  h-screen"}>
                <div className={"border border-black max-w-[928px] h-screen mx-auto"}>
                    {!showSave && <div className={"mt-4 flex  gap-4"}>
                        <div onClick={handlerClickNavigateBoard}>
                            <p className={"text-2xl font-bold"}>{boardName}</p>
                        </div>
                        <div onClick={handlerClickEditTitleBoar}>
                            <img src={points} alt="Menu"/>
                        </div>
                    </div>}
                    {showSave && <div className={"flex gap-4"}>
                        <div>
                            <input type="text" value={boardName} onChange={handlerOnChangeInput}
                                   className={" py-2 px-2 rounded-lg min-w-[285px]"}/>
                        </div>
                        <div className={"flex gap-2"}>
                            <button onClick={()=> {
                                handlerClickSaveButton();
                                handlerClickEditTitleBoar()
                            }}
                                    className={"border py-1 px-2 text-white rounded-lg font-bold text-[19px]"}>
                                Save
                            </button>
                            <button  className={"border py-1 px-2 text-white rounded-lg font-bold text-[19px]" } onClick={handlerClickEditTitleBoar}>
                                Cancel
                            </button>
                            
                        </div>
                    </div>}


                    <div className={"border border-black mt-8"}>
                        {
                            dataList.map((list, index) => (
                                <List key={index} id={list.id} title={list.title}/>
                            ))
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Folder;