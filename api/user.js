import axios from 'axios'
import { API_URL } from '../constants'

const endpoint = `${API_URL}/auth`

const userApi = {
  addUser: (user, wallet) => axios.post(endpoint, {
    user,
    wallet
  }),
  getUser: wallet => axios.get(`${endpoint}/${wallet}`),
  getArtists: () => axios.get(`${endpoint}/artists`)
}

export default userApi