import axios from 'axios'
import { API_URL } from '../constants'

const endpoint = `${API_URL}/contracts`

const contractApi = {
  getContracts: () => axios.get(endpoint),
}

export default contractApi