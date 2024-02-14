import {SwatchesPicker, ColorResult} from "react-color";
import {useState} from "react";
import {BoardCreatorPropsInterface} from "./board.creator.props.interface.ts";

const BoardCreator = ({handlerCreateBoard}: BoardCreatorPropsInterface) => {
    const [showColorPicker, setShowColorPicker] = useState(false)
    const [titleValue, setTitleValue] = useState("")
    const [currentColor, setCurrentColor] = useState("#C5CAE9")

    const handlerClickPicker = ()=>{
        setShowColorPicker(!showColorPicker)
    }

    const handlerClickCreate = ()=>{
        handlerCreateBoard(titleValue,currentColor)
        setCurrentColor("#C5CAE9")
        setTitleValue("")
    }
    return (
        <div style={{backgroundColor: currentColor}} className={`h-36 w-64  text-lg font-bold rounded-lg px-4 py-4`}>
            <div>
                <p>
                    Board Title
                </p>
            </div>
            <div>
                <input type={"text"}
                       className={" w-56 rounded-lg h-10 px-3 py-2"} value={titleValue} onChange={(e)=>setTitleValue(e.target.value)}/>
            </div>
            <div>
                <div className={"flex items-center justify-between mt-4"}>
                    <div className={"flex gap-2"}>
                        <div>
                            Color
                        </div>
                        <img src="src/core/assets/Ellipse.svg" alt="color"  onClick={handlerClickPicker}/>
                    </div>
                    <button className={"bg-[#6D28D9] text-white py-2 px-4 rounded-lg text-sm"} onClick={handlerClickCreate}>
                        Create
                    </button>
                </div>
            </div>
            {showColorPicker && <SwatchesPicker color={currentColor} onChangeComplete={(color: ColorResult)=>setCurrentColor(color.hex)}/>}
        </div>
    );
};

export default BoardCreator;