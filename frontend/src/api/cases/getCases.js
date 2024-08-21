import axios from 'axios'
import { url } from '../http';


export async function getCases(){
    const response = await axios.get(`${url}portfolio/`);
    return response.data;
}