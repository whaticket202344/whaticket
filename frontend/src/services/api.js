import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true
});

export const openApi = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL
});

export const apiWhatsApp = axios.create({
  baseURL: "https://pg0qdt41jj.execute-api.sa-east-1.amazonaws.com/dev"
});

export default api;
