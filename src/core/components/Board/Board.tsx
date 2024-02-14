import {ChangeEvent, useState} from "react";
import {BoardPropsInterface} from "../Boards/board.props.interface.ts";
import { SwatchesPicker, ColorResult } from "react-color";
import boardApi from "../../apis/board.api.ts";
import {useNavigate} from "react-router-dom";


const Board = ({title, color, id}:BoardPropsInterface) => {
    const [showText, setShowText] = useState<boolean>(true);
    const [valueTitle, setValueTitle] = useState<string>(title)
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
    const [currentColor, setCurrentColor] = useState<string>(color)


    const navigate =useNavigate()
    const handlerButtonSave = async ()=>{
        const body ={
            title : valueTitle,
            color: currentColor
        }
        const response = await boardApi.patch(`/board/${id}`, body)

        const object = response.data.data[0]
        setValueTitle(object.title)
        setCurrentColor(object.color)
    }
    const toggleShowText =  () => {
        setShowText(!showText);
    }

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValueTitle(event.target.value);
    }

    const toggleColorPicker = () =>{
        setShowColorPicker(!showColorPicker)
    }

    const handlerOnChangeColor = (color: ColorResult) => {
        setCurrentColor(color.hex)
    }

    const handlerNavigate = ()=>{
        navigate(`/folder/${id}`)
    }

    return (
        <div style={{backgroundColor: currentColor}} className={`h-36 w-64  text-lg font-bold rounded-lg px-4 py-4`}>
            {showText ? (
                <div className={"flex flex-row h-[100%]"} >
                    <div className={"flex items-center justify-center w-[90%] "} onClick={handlerNavigate}>
                        <p className={"ml-[17%]"}>
                            {valueTitle}
                        </p>
                    </div>
                    <div className={" flex items-end"} onClick={toggleShowText} >
                        <img src="src/core/assets/edit.png" alt="edit" height={30} width={30} />
                    </div>
                </div>

            ) : (
                <div>
                    <div>
                        <p>
                            Board Title
                        </p>
                    </div>
                    <div>
                        <input type={"text"} value={valueTitle} onChange={handleChangeInput}  className={" w-56 rounded-lg h-10 px-3 py-2"}/>
                    </div>
                    <div>
                        <div className={"flex items-center justify-between mt-4"}>
                            <div className={"flex gap-2" }>
                                <div>
                                  Color
                                </div>
                                <img src="src/core/assets/Ellipse.svg" alt="color" onClick={toggleColorPicker}/>
                            </div>
                            <button onClick={()=>{toggleShowText();handlerButtonSave()}} className={"bg-[#6D28D9] text-white py-2 px-4 rounded-lg text-sm"}>
                                Save
                            </button>
                        </div>
                    </div>
                    {showColorPicker && <SwatchesPicker  color={currentColor} onChangeComplete={(color: ColorResult)=>handlerOnChangeColor(color)} />}
                </div>

            )

            }
        </div>
    );
};

export default Board;