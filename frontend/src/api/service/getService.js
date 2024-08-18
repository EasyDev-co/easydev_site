import axios from 'axios';
import { url } from '../index.js'

export async function getService() {

    const response = await axios.get(`${url}amenities/<uuid:pk>/`);
    return response.data;
}