import axios from "axios"
import { paths } from "../constants/paths"
import { AUTH_API } from "../constants/configAuthApi"

export const postUser = (data) => {
    axios.post(AUTH_API.REGISTER, data).then(res => res)

}
export const loginUser = (data) => {
    axios.post(AUTH_API.LOGIN, data).then(res => res)

}