import axios from 'axios'
import { API_URL } from '../constants'

const endpoint = `${API_URL}/nftSale`

const nftSaleApi = {
  addNftSale: (contract, tokenId, name, image, owner, startedAt, startPrice, endPrice, duration) => axios.post(endpoint, {
    contract,
    tokenId,
    name,
    image,
    owner,
    startedAt,
    startPrice,
    endPrice,
    duration
  }),
  getSomeNftSale: tokens => axios.post(`${endpoint}/some`, { tokens }),
  removeNftSale: (contract, tokenId) => axios.delete(`${endpoint}/${contract}/${tokenId}`)
}

export default nftSaleApi