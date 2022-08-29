import axios from 'axios'

import { API_URL } from '../constants/'

const endpoint = `${API_URL}/custom`

const customNFTApi = {
  create: (address, name, description, data, type, banner, copies, width, height) => axios.post(endpoint, {
    address,
    name,
    description,
    data,
    type,
    banner,
    copies,
    width,
    height
  }),
}

export default customNFTApi