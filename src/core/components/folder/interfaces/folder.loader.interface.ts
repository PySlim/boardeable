import {AxiosResponse} from "axios";


interface ListData{
    id: string | number,
    title: string,
    board_id: string | number
}

interface BoardData{
    color: string,
    created: Date,
    id: number,
    title: string,
    user_id: number
}

export interface FolderLoaderInterface{
    response : AxiosResponse<ListData>
    board : AxiosResponse<BoardData>
}