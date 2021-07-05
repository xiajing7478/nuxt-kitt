export default ({ $axios, route, store, redirect, app: { $cookies } }) => {
    const service = $axios.create({
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        }
    })

    $axios.onRequest(config => {
        config.headers.Authorization = store.state.user.token;
        // config.headers['Content-Type'] = 'application/json;charset=UTF-8'
        // config.headers.Authorization =
        // 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjE0MDlmZDI2LTcyOGUtMjA1MS01NjcxLTM5ZjU1MWVmN2E5NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjEiLCJqdGkiOiI3ODMyOGU1NC0wZTlmLTQ2Y2EtYjQ5Mi1kNWMwYzQ1MTczZTgiLCJpYXQiOjE2MjU0NTU5ODQsIm5iZiI6MTYyNTQ1NTk4NCwiZXhwIjoxNjI1NTQyMzg0LCJpc3MiOiJDTVMiLCJhdWQiOiJDTVMifQ.ReZ2YwPMpffDdIwWgebfacsZNq5PklcNxZ6HssVL-lg'
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