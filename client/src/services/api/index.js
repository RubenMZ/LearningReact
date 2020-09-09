import axios from 'axios';

const HOST = process.env.REACT_APP_API_HOST || 'http://localhost'
const PORT = process.env.REACT_APP_API_PORT || 3000

export default axios.create({
  baseURL: `${HOST}:${PORT}`,
  headers: {'Content-Type': 'application/json'}
})