import {AxiosResponse} from "axios";

interface MyData {
    data: string;
}
export interface LoaderInterface{
    response: AxiosResponse<MyData>
}