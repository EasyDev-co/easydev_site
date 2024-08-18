import axios from 'axios';
import { url } from '../index.js'

export async function getServices() {

    const response = await axios.get(`${url}amenities/`);
    return response.data;
}
