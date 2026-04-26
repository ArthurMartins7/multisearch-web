import axios from 'axios'

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:8080/multisearch',
})

export const filterMultisearch = async (query) => {
  const response = await api.get('/filter', {
    params: { query },
  })
  return response.data
}

export default api
