import axios from 'axios'
import { url } from '../http.js'

export async function getVacancies() {
  try {
    const response = await axios.get(`${url}vacancy/`)

    return response.data
  } catch (error) {
    console.log(error)
  }
}
