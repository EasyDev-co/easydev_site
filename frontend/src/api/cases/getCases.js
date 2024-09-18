import axios from 'axios'
import { url } from '../http'

export const getCases = async () => {
  const response = await axios.get(`${url}portfolio/`)

  if (response.status !== 200) {
    throw new Error('Ошибка сервера')
  }

  return response.data
}
