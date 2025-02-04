import axios from "axios"

const AxiosInstance = axios.create({
    baseURL: 'https://randomuser.me'
})

export default AxiosInstance