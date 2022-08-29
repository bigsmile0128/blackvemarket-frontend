import axios from 'axios'
import { API_URL } from '../constants'

const endpoint = `${API_URL}/activities`

const activityApi = {
  getActivities: user => axios.get(`${endpoint}/${user}`),
  addActivity: activity => axios.post(endpoint, activity)
}

export default activityApi