import axios from 'axios';
import { url } from '../http'

export async function getServices() {
    try {
        const response = await axios.get(`${url}amenities/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}
