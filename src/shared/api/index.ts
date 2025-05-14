import { store } from 'app/lib';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { authActions, refreshToken } from 'features/index';

interface QueueItem {
  resolve: (token: string) => void;
  reject: (error: AxiosError) => void;
}

const baseURL = import.meta.env.VITE_BASE_URL;

const privateInstance = axios.create({
  baseURL,
  withCredentials: true,
  paramsSerializer: params => {
    const parts = [];
    for (const key of Object.keys(params)) {
      const value = params[key];
      if (Array.isArray(value)) {
        // If the parameter is an array, create separate key=value pairs for each item in the array
        value.forEach(val => {
          if (val !== null && typeof val !== 'undefined') {
            parts.push(`${key}=${encodeURIComponent(val)}`);
          }
        });
      } else if (value !== null && typeof value !== 'undefined') {
        parts.push(`${key}=${encodeURIComponent(value)}`);
      }
    }
    // Join all parts into a single string using '&' as a separator
    return parts.join('&');
  },
});

export const setAuthTokenHeader = (token: string) => {
  privateInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const clearAuthTokenHeader = () => {
  delete privateInstance.defaults.headers.common['Authorization'];
};

let isRefreshing = false;
let failedRequestsQueue: QueueItem[] = [];

const processQueue = (error: AxiosError | null, token: string | null) => {
  failedRequestsQueue.forEach(promise => {
    if (error) {
      promise.reject(error);
    } else if (token) {
      promise.resolve(token);
    }
  });
  failedRequestsQueue = [];
};

const handleTokenRefresh = async (): Promise<string> => {
  try {
    const { accessToken } = await refreshToken();
    setAuthTokenHeader(accessToken);
    store.dispatch(authActions.enter(accessToken));
    processQueue(null, accessToken);
    return accessToken;
  } catch (error) {
    processQueue(error as AxiosError, null);
    store.dispatch(authActions.exit());
    clearAuthTokenHeader();
    throw error;
  } finally {
    isRefreshing = false;
  }
};

privateInstance.interceptors.response.use(
  response => response,
  async (error: AxiosError) => {
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      if (!isRefreshing) {
        isRefreshing = true;

        try {
          const newToken = await handleTokenRefresh();

          originalRequest.headers = originalRequest.headers || {};
          originalRequest.headers['Authorization'] = `Bearer ${newToken}`;

          return privateInstance(originalRequest);
        } catch (refreshError) {
          return Promise.reject(refreshError);
        }
      } else {
        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            resolve: (newToken: string) => {
              originalRequest.headers = originalRequest.headers || {};
              originalRequest.headers['Authorization'] = `Bearer ${newToken}`;
              resolve(privateInstance(originalRequest));
            },
            reject: (err: AxiosError) => {
              reject(err);
            },
          });
        });
      }
    }

    return Promise.reject(error);
  }
);

export const apiPrivate = privateInstance;
