import axios from 'axios';
import { url } from '../http.js';


export async function getCases() {
    try {
        const response = await axios.get(`${url}portfolio/`);
        return response.data;
    } catch (error) {
        console.log(error);
    }

}