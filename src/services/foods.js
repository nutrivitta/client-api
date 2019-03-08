import axios from '@/common/http';

export default {
    get(id, config) {
        return axios.get(`/api/v1/foods/${id}`, config);
    },

    getAll(config) {
        return axios.get(`/api/v1/foods/`, config);
    }
}