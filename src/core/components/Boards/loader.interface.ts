import {AxiosResponse} from "axios";

interface BoardData{
    title: string,
    color: string,
    id: string,
    user_id: number
}

export interface LoaderInterface{
    response: AxiosResponse<BoardData>
    user_id: number
}