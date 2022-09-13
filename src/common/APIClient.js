import axios from "axios"

const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
})

export const get = async (path, options = {}) => {
    const response = await request.get(path, options)
    return response.data;
}

export const post = async (path, options = {}) => {
    const response = await request.post(path, options)
    return response.data;
}

export const delete = async (path, options = {}) => {
    const response = await request.delete(path, options)
    return response.data;
}
export const put = async (path, options = {}) => {
    const response = await request.put(path, options)
    return response.data;
}
export default request