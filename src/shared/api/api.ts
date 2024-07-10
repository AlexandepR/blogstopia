import type { AxiosRequestConfig, AxiosError } from 'axios';
import axios from 'axios';
import { COOKIE } from 'shared/const/cookies';

const api = axios.create({
    baseURL: __API__,
    withCredentials: true,
});

api.interceptors.request.use(
    (config) => {
        console.log('[Request Interceptor config]:', config);
        return config;
    },
    async (error) => {
        console.error('[Request Interceptor Error]:', error);
        return await Promise.reject(error);
    },
);
api.interceptors.response.use(
    (response) => {
        console.log('[Response Interceptor]:', response);
        return response;
    },
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & {
            _retry?: boolean;
        };

        if (error.response?.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshResponse = await api.post('/auth/refresh-token');
                document.cookie = `${COOKIE.ACCESS_TOKEN}=${refreshResponse.data.accessToken}`;

                return await api(originalRequest);
            } catch (refreshError) {
                console.error('Refresh token failed', refreshError);
            }
        }
        return await Promise.reject(error);
    },
);

export default api;
