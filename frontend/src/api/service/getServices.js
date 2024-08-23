import axios from 'axios';
import { url } from '../http'

export async function getServices() {

    const response = await axios.get(`${url}amenities/`);
    return response.data;
}
