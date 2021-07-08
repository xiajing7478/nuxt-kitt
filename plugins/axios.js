import { Message } from 'element-ui'
export default ({ $axios, route, store, redirect, app: { $cookies } }) => {
    const service = $axios.create({
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })

    $axios.onRequest(config => {
        config.headers['Authorization'] = store.state.user.token || '';
        console.log('请求拦截...')
        return config
    })


    $axios.onResponse(response => {
        if (response.data.ret == 200 && response.data.data.err_code == 0) {
            return response.data
        } else {
            // Message.error(response.data.data.err_msg || '')
        }
        // debugger
        // console.log('相应拦截...', res)
        // if (res.data.error.code === 401) {
        //     redirect('/login')
        // }
        // return res
    }, err => {
        console.log('$axios error', err)
    })
}