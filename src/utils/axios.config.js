import axios from 'axios';
import Swal from 'sweetalert2';

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

instance.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      const originalRequest = error.config;
      if ((error.response.status === 401 || error.response.status === 403) && !originalRequest._retry) {
        originalRequest._retry = true;
        const refreshToken = localStorage.getItem('refreshToken');
          if(!refreshToken){
            axios.post(`${import.meta.env.VITE_URL}/auth/getAccessToken`, { refreshToken })
            .then(res => {
              if(res.status === 403 || res.status === 401){
                console.log("Session expired");
                Swal.fire({
                  title: 'Session expired',
                  text: 'Please login again',
                  icon: 'warning',
                  confirmButtonText: 'OK'
                }).then(() => {
                  sessionStorage.removeItem('accessToken');
                  localStorage.removeItem('refreshToken');
                  
                })
              }
              if (res.status === 200) {
                console.log("Access token refreshed");
                sessionStorage.setItem('accessToken', res.data.accessToken);
                return instance(originalRequest);
              }
            })
            .catch(refreshError => {
              console.error('Error refreshing token:', refreshError);
              console.log("Session expired");
              Swal.fire({
                title: 'Session expired',
                text: 'Please login again',
                icon: 'warning',
                confirmButtonText: 'OK'
              }).then(() => {
                sessionStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
              })
            })
          }
      }
      return Promise.reject(error);
    }
);
  

export default instance;