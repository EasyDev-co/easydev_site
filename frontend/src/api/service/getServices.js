import axios from 'axios'
import { url } from '../http'

export const getServices = async () => {
  const response = await axios.get(`${url}amenities/`)

  if (response.status !== 200) {
    throw new Error('Ошибка сервера')
  }

  return response.data
}
