const pkg = require('./package.json')
module.exports = {
    mode: 'universal',
    /*
     ** Headers of the page
     */
    head: {
        title: pkg.name,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
    },
    /**
     * 配置中定义中间件
     */
    router: {
        middleware: 'auth',
        // 扩展路由
        extendRoutes(routes, resolve) {
            console.log('routes', routes)
            routes.push({
                name: 'home',
                path: '/index',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    },
    /*
     ** Customize the progress bar color
     */
    loading: { color: '#3B8070' },
    /**
     ** 全局css（会进行webpack打包处理）
     */
    css: [
        '~assets/css/common.css',
        'assets/css/transition.css',
        'element-ui/lib/theme-chalk/index.css'
    ],
    /**
     * 插件
     */
    plugins: [
        { src: '~plugins/ElementUI', ssr: true }
    ],
    /**
     * 模块
     */
    modules: [

    ],
    axios: {

    },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['element-ui', 'axios'],
        // transpile: [/^element-ui/],
        // loaders: [{
        //     test: /\.(png|jpe?g|gif|svg)$/,
        //     loader: "url-loader",
        //     query: {
        //         limit: 10000,
        //         name: 'img/[name].[hash].[ext]'
        //     }
        // }],
        /*
         ** Run ESLint on save
         */
        extend(config, { isDev, isClient }) {
            if (isDev && isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}