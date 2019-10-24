import axios from "axios";
import { getToken } from "./auth";


const api = axios.create({
  baseURL: "http://test-frontend-galeriapage.herokuapp.com/auth/login"
});

api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.authorization = `Bearer Token ${token}`;
  }
  return config;
});

export default api;