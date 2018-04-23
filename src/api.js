import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:5000/',
  withCredentials: false,
  headers: {
    'Content-type': 'application/json',
  },
});

export const setToken = token => {
  instance.defaults.headers.Authorization = `Bearer ${token}`;
};

export const deleteToken = token => {
  delete instance.defaults.headers.Authorization;
};

export const getSecret = () => instance('user/profile');
export const sendUserCredentials = (email, password) =>
  instance.post('auth/login', { email, password });
