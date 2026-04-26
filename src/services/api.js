import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:8080/multisearch',
})

export const filterMultisearch = async (query) => {
  const response = await api.get('/filter', {
    params: { query },
  })
  return response.data
}

export default api
