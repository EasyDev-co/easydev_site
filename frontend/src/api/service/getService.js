import axios from 'axios'
import { url } from '../http'

//TODO: Удалить функцию, если не понадобится
export async function getService() {
  try {
    const response = await axios.get(`${url}amenities/<uuid:pk>/`)
    return response.data
  } catch (error) {
    console.log(error)
  }
}
