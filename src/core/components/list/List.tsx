import React, {useState} from "react";
import Card from "../card/Card.tsx";
import point from "../../assets/points.svg"

import {ListPropsInterfaces} from "./interfaces/list.props.interfaces.ts";

const message: string[] = ['hola mundo desde java', 'Hola mundo desde python', 'Hola mundo desde golang']

const List = ({title, id}: ListPropsInterfaces) => {
    const [showEdit, setShowEdit] = useState<boolean>(false)
    const [titleList, setTitleList] = useState(title)
    const [position, setPosition] = useState({left:0, top:0})
    const [showModal, setShowModal] = useState(false)
    const toggleShowEdit = ()=>{
        setShowEdit(!showEdit)
    }

    const openModal = (event: React.MouseEvent<HTMLDivElement, MouseEvent>)=>{
        // @ts-ignore
        const rect = event.target.getBoundingClientRect();
        setPosition({left:rect.left, top: rect.bottom + window.scrollY})
        setShowModal(true)
    }
    const closeModal = ()=>{
        setShowModal(false)
    }
    return (
        <div className={"w-72 bg-[#F5F5F5] px-2 py-2 rounded-lg"}>
            <div className={"flex justify-between mb-2"}>
                <div>
                    <p className={"text-lg font-bold"}>{titleList}</p>
                </div>
                <div onClick={openModal}>
                    <img src={point} alt="menu" />
                </div>
            </div>
            {showModal && <div className="absolute bg-white p-4 rounded-lg shadow-lg flex flex-col items-start"
                               style={{left: position.left, top: position.top}}>
                
                <button onClick={closeModal}>Edit</button>
                <button>Delete</button>
            </div>}

            {
                message.map((text, index) => (
                        <Card key={index} text={text}/>
                    )
                )
            }

            {showEdit ? (
                <div className={"bg-[#FFFFFF] px-2 py-2 rounded-lg"}>
                    <div>
                        <p>Card Title</p>
                    </div>
                    <div className={" mt-2"}>
                        <input type="text" className={"border px-2 py-2 rounded-lg"}/>
                    </div>
                    <div className={"flex gap-8 mt-2"}>
                        <button
                            className={" bg-[#6D28D9] text-white font-bold py-3 px-3 rounded-lg text-sm hover:bg-[#5c21bd]"} onClick={toggleShowEdit}>Add
                            card
                        </button>
                        <button className={" bg-[#E5E5E5] font-bold py-3 px-3 rounded-lg text-sm"} onClick={toggleShowEdit}> Cancel</button>
                    </div>
                </div>
            ): (
                <div className={" mt-2"}>
                    <button className={"px-2 py-1"} onClick={toggleShowEdit}>
                        <p>
                            + Add a card
                        </p>
                    </button>
                </div>
            )

            }


        </div>
    );
};

export default List;