import {FolderLoaderInterface} from "./interfaces/folder.loader.interface.ts";
import boardApi from "../../apis/board.api.ts";

// @ts-ignore
export const loader = async ({params}):Promise<FolderLoaderInterface | undefined > =>{
    const boardId = params.id;
    try{
        const response = await boardApi.get(`/list/board/${boardId}?board_id=${boardId}`)
        const board = await boardApi.get(`/board/${boardId}`);
        return {response, board}
    }catch (error) {
        return undefined
    }
}