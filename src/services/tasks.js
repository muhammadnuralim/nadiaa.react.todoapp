import axios from "axios"
const baseUrl = import.meta.env.VITE_APIBASE_URL + 'api/tasks'

let token = null
let config

const setToken = newToken => {
    token = `Bearer ${newToken}`
    config = {
        headers: { Authorization: token },
    }
}

const getAll = async () => {
    const response = await axios.get(baseUrl, config)
    return response.data
}

const postTask = async taskObj => {
    const response = await axios.post(baseUrl, taskObj, config)
    return response.data
}

const deleteTask = async taskObj => {
    const response = await axios.delete(`${baseUrl}/${taskObj.id}`, config)
    return response.data
}

const putTask = async taskObj => {
    const response = await axios.put(`${baseUrl}/${taskObj.id}`, taskObj, config)
    return response.data
}

export default {getAll, postTask, deleteTask, putTask, setToken}