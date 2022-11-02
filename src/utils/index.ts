import axios from 'axios';
import { ResponseAPI } from "../interfaces"
import { AxiosError } from 'axios';

const id = import.meta.env.VITE_API_KEY as string 

export const get = async (query: string): Promise<ResponseAPI> => {
    const url = `https://api.coingecko.com/api/v3/coins/{id}`
    try {
        const { data } = await axios.get(url)
        return data
        console.log(data);
    } catch (error) {
        throw new Error((error as AxiosError).message)
    }
}