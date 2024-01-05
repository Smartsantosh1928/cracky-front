import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_URL, 
  headers: {
    'Content-Type': 'application/json'
  }
});

instance.interceptors.request.use(
    config => {
        const token = sessionStorage.getItem('accessToken');
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        Promise.reject(error)
    }
);

instance.interceptors.response.use((response) => {
    return response
}
, async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
        const res = await axios.post(`${import.meta.env.VITE_URL}/auth/getAccessToken`, { refreshToken });
        if (res.status === 200) {
            sessionStorage.setItem('accessToken', res.data.accessToken);
            return instance(originalRequest);
        }
    }
    return Promise.reject(error);
});

export default instance;