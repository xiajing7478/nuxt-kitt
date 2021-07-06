export default ({ $axios, route, store, redirect, app: { $cookies } }) => {
    const service = $axios.create({
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })

    $axios.onRequest(config => {
        config.headers['Authorization'] = store.state.user.token || '';
        // console.log('请求拦截...')
        return config

    })


    $axios.onResponse(res => {
        // debugger
        // console.log('相应拦截...', res)
        // if (res.data.error.code === 401) {
        //     redirect('/login')
        // }
        return res
    })

}