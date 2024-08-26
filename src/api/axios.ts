import axios, { AxiosInstance } from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://datn-backend-production-abfd.up.railway.app/api', //http://localhost:3000 // https://datn-backend-production-abfd.up.railway.app/api
  timeout: 6000,
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

const instanceTest: AxiosInstance = axios.create({
  baseURL: 'https://datn-backend-production-abfd.up.railway.app/api'
})

instanceTest.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

export { instanceTest }

export default instance
