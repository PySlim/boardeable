import axios from 'axios';
import BoardConstants from "../constants/board.constants.ts";


export const boardApi = axios.create({
    baseURL: BoardConstants.baseUrl
})