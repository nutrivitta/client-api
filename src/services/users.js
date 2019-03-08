import axios from '@/common/http';

export default {
    get(id, config) {
        return axios.get(`/api/v1/users/${id}`, config);
    },

    getAll(config) {
        return axios.get(`/api/v1/users/`, config);
    },

    post(data, config) {
        return axios.post(`/api/v1/users/`, data, config);
    },

    patch(id, data, config) {
        return axios.patch(`/api/v1/users/${id}`, data, config);
    },

    login(data, config) {
        return axios.post(`/api/v1/users/login/`, data, config);
    },

    verify(data, config) {
        return axios.post(`/api/v1/users/verify`, data, config);
    },

    emailExists(data, config) {
        return axios.post(`/api/v1/users/email-exists`, data, config);
    }
};