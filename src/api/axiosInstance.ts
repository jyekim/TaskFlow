import axios from 'axios';

const api = axios.create({
    baseURL: 'http://54.180.116.0:8080/api',
     headers: {
    "ngrok-skip-browser-warning": "true",
  },
});
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
},
  (error) => Promise.reject(error)
);

export default api;
