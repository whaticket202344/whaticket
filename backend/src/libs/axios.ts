import axios from 'axios'

export const api = axios.create({
  baseURL: 'https://c9283jtv25.execute-api.sa-east-1.amazonaws.com/dev',
})

