import axios from 'axios'

const request = axios.create({
    baseURL: '/',
    timeout: 5000
})

//https://github.com/axios/axios
//请求拦截器  
request.interceptors.request.use(config => {
    //请求拦截
    return config
}, error => {
    //抛出异常
    return Promise.reject(error)
})

//响应拦截器
request.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})

export default request