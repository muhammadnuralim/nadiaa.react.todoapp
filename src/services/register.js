import axios from "axios"

const baseUrl = import.meta.env.VITE_APIBASE_URL + 'api/auth/register'

const register = async newUser => {
    const response = await axios.post(baseUrl, newUser)
    return response
}

export default {register}