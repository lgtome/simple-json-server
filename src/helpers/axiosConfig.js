import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',//https://jsonplaceholder.typicode.com/
    timeout: 1000
})


export default axiosInstance