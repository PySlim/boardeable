import {LoaderInterface} from "./loader.interface.ts";
import boardConstants from "../../constants/board.constants.ts";
import boardApi from "../../apis/board.api.ts";

export const loader = async (): Promise<LoaderInterface | undefined > =>{
    const user_id= Number(window.localStorage.getItem(boardConstants.IDUSER))
    try{
        const response = await boardApi.get(`/board/user/${user_id}`)
        return {response, user_id}
    }catch (error){
        return undefined
    }
}