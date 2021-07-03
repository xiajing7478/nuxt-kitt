import axios from 'axios'

const service = axios.create({
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})

service.interceptors.request.use(
    config => {},
    error => {
        return Promise.reject(error)
    }
)

service.interceptors.response.use(
    res => {
        return res.data
    },
    error => {
        return Promise.reject(error)
    }
)

export default {
    post(url, data) {
        return service({
            method: 'post',
            url,
            params: data
        })
    },
    get(url, data) {
        console.log('get request url', url)
        return service({
            method: 'get',
            url,
            params: data
        })
    },
}