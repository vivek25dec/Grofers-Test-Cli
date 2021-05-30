import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.234.76.62:3000/'
})

export default instance
