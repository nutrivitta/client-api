import axios from 'axios';

export function setAuthToken(token) {
    axios.defaults.headers['x-auth'] = token;
}

export function removeAuthToken() {
    delete axios.defaults.headers['x-auth'];
}

export function setBaseUrl(url) {
    axios.defaults.baseURL = url;
}

export default axios;