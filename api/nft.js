import axios from 'axios'
import { API_URL } from '../constants'

const endpoint = `${API_URL}/nfts`

const nftApi = {
  addNfts: (contract, tokenIds, imgUrl, name) => axios.post(endpoint, {
    contract,
    tokenIds,
    imgUrl,
    name
  }),
  getSomeNfts: tokens => axios.post(`${endpoint}/some`, { tokens })
}

export default nftApi