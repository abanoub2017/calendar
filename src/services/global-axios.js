import axios from 'axios'
const globalAxios = axios.create({
  baseURL: 'http://localhost:3001'
})

export default globalAxios

