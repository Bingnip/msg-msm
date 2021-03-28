import axios from 'axios'
import { Loading, Message } from 'element-ui'

const request = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
})

const loading = {
    loadingInstance: null,
    open: function() {
        // 用单例
        if (this.loadingInstance === null) {
            this.loadingInstance = Loading.service({target: '.main'})
        }
    },
    close: function() {
        if (this.loadingInstance !== null) {
            this.loadingInstance.close()
        }
        this.loadingInstance = null
    }
}

//https://github.com/axios/axios
//请求拦截器  
request.interceptors.request.use(config => {
    loading.open()
    //请求拦截
    return config
}, error => {
    loading.close()
    //抛出异常
    return Promise.reject(error)
})

//响应拦截器
request.interceptors.response.use(response => {
    loading.close()
    const res = response.data
    if (res.code != 2000) {
        Message({
            message: res.message || '系统异常',
            type: 'warning',
            duration: 5 * 1000
        })
    }
    return response
}, error => {
    loading.close()
    return Promise.reject(error)
})

export default request