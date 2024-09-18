import axios from 'axios'
import { url } from '../http'

export const getAbout = async () => {
  const response = await axios.get(`${url}site_settings/about_us/`)

  if (response.status !== 200) {
    throw new Error('Ошибка сервера')
  }

  return response.data
}
