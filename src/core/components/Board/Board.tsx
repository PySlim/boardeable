import {ChangeEvent, useEffect, useState} from "react";
import {BoardPropsInterface} from "../Boards/board.props.interface.ts";
import { SketchPicker, ColorResult } from "react-color";

const pastelColors = [
    '#FFD1DC', '#FFB6C1', '#FF69B4', '#FFC0CB', '#FFA07A', '#FF7F50',
    '#FF6347', '#FF4500', '#FFD700', '#FFFF00', '#FFFACD', '#FAFAD2',
    '#FFEFD5', '#FFE4B5', '#FFDAB9', '#EEE8AA', '#F0E68C', '#BDB76B'
];
const Board = ({title}:BoardPropsInterface) => {
    const [showText, setShowText] = useState<boolean>(true);
    const [valueInput, setValueInput] = useState<string>('')
    const [showColorPicker, setShowColorPicker] = useState<boolean>(false)
    const [currentColor, setCurrentColor] = useState<string>("#FECACA")

    useEffect(() => {
        setValueInput(
            title
        )
    }, []);
    
    const toggleShowText = () => {
        setShowText(!showText);
    }

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        setValueInput(event.target.value);
    }

    const toggleColorPicker = () =>{
        setShowColorPicker(!showColorPicker)
    }

    const handlerOnChangeColor = (color: ColorResult) => {
        setCurrentColor(color.hex)
    }

    return (
        <div style={{backgroundColor: currentColor}} className={`h-36 w-64  text-lg font-bold rounded-lg px-4 py-4`}>
            {showText ? (
                <div className={"flex flex-row h-[100%]"}>
                    <div className={"flex items-center justify-center w-[90%] "}>
                        <p className={"ml-[17%]"}>
                            {valueInput}
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
                        <input type={"text"} value={valueInput} onChange={handleChangeInput}  className={" w-56 rounded-lg h-10 px-3 py-2"}/>
                    </div>
                    <div>
                        <div className={"flex items-center justify-between mt-4"}>
                            <div className={"flex gap-2" }>
                                <div>
                                  Color
                                </div>
                                <img src="src/core/assets/Ellipse.svg" alt="color" onClick={toggleColorPicker}/>
                            </div>
                            <button onClick={toggleShowText} className={"bg-[#6D28D9] text-white py-2 px-4 rounded-lg text-sm"}>
                                Save
                            </button>
                        </div>
                    </div>
                    {showColorPicker && <SketchPicker  color={currentColor} onChangeComplete={(color: ColorResult)=>handlerOnChangeColor(color)} presetColors={pastelColors}/>}
                </div>

            )

            }
        </div>
    );
};

export default Board;