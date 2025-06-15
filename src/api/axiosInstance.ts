import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.180.116.0:8080/api',
    // baseURL: '/api',
    // withCredentials: true,
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
