import axios from 'axios'
import { API_URL } from '../constants'

const endpoint = `${API_URL}/collections`

const collectionApi = {
  getCollections: wallet => axios.get(`${endpoint}/${wallet}`),
  getCollection: id => axios.get(`${endpoint}/collection/${id}`),
  getVisibleCollections: () => axios.get(`${endpoint}/visible`),
  getAllCollections: () => axios.get(endpoint),
  createCollection: collection => axios.post(endpoint, collection),
  changeOwner: (contract, tokenId, collectionId, wallet) => axios.put(`${endpoint}/${collectionId}`, {
    contract,
    tokenId,
    wallet
  }),
  addToCollection: (contract, tokenIds, collectionId, wallet) => axios.post(`${endpoint}/${collectionId}`, {
    contract,
    tokenIds,
    wallet
  }),
  // removeFromCollection: (contract, tokenId, collectionId) => axios.delete(`${endpoint}/${collectionId}/${contract}/${tokenId}`),
  changeVisbility: (id, val) => axios.put(`${endpoint}/collection/${id}`, {
    visible: val
  }),
  deleteCollection: id => axios.delete(`${endpoint}/${id}`)
}

export default collectionApi