export default ({ app, redirect }) => {
    // console.log('插件守卫')
    /**
     * app == vue实例
     * redirect 跳转函数(right)
     */

    // 前置守卫
    //  app.router.beforeEach((to, from, next) => {
    //      // 全局前置的守卫
    //      // next(true)/nexxt(false)  next('/login') error
    //      if(to.name === 'login' || to.name === 'reg') {
    //          next()
    //      } else {
    //          redirect({ name: 'login'})
    //      }
    //  })

    // 后置守卫
    //  app.router.afterEach((to, from) => {

    //  })
}