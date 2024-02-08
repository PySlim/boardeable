import {useState} from "react";
import Card from "../card/Card.tsx";

const message: string[] = ['hola mundo desde java', 'Hola mundo desde python', 'Hola mundo desde golang']

const List = () => {
    const [showEdit, setShowEdit] = useState<boolean>(false)

    const toggleShowEdit = ()=>{
        setShowEdit(!showEdit)
    }
    return (
        <div className={"w-72 bg-[#F5F5F5] px-2 py-2 rounded-lg"}>
            <div className={"flex justify-between mb-2"}>
                <div>
                    <p className={"text-lg font-bold"}>To Do</p>
                </div>
                <div>
                    <img src="src/core/assets/ponts.svg" alt="menu" />
                </div>
            </div>
            {
                message.map((text,index)=>(
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