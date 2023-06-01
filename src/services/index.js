import axios from "axios"

const baseapi = axios.create()

baseapi.interceptors.response.use((response) => {

    return response;
}, (error) => {
    if (error.response && error.response.data) {
        alert(error.response.data.msg); // TODO implement modal for show errors
        // return Promise.reject(error.response.data);
    }
    return Promise.reject(error.response.data.msg);
});
export default baseapi