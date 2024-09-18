import axios from 'axios'
import { url } from '../http.js'

export const getVacancies = async () => {
  const response = await axios.get(`${url}vacancy/`)

  if (response.status !== 200) {
    throw new Error('Ошибка сервера')
  }

  return response.data
}
