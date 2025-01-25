import axios from 'axios';
import { url } from '../http'

export async function getService(id) {
    try {
        const response = await axios.get(`${url}amenities/${id}/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}