import axios from "./index"
// import axionsInterceptor from "";
import { AUTH_API } from "../constants/configAuthApi"

const getData = res =>res.data

export const postUser = (data) =>
    axios({
        method: 'post',
        url: AUTH_API.REGISTER,
        data,
    }).then(getData);

export const loginUser = (data) =>
    axios({
        method: 'post',
        url: AUTH_API.LOGIN,
        data,
    }).then(getData);
