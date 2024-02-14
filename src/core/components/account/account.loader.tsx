import boardApi from "../../apis/board.api.ts";
import boardConstants from "../../constants/board.constants.ts";
import {LoaderInterface} from "./loader.interface.ts";


export const loader = async (): Promise<LoaderInterface | undefined > =>{
    const id = window.localStorage.getItem(boardConstants.IDUSER)
    try{
        const response = await boardApi.get(`/user/${id}`)
        return {response}
    }catch (error) {
        return undefined
    }
}