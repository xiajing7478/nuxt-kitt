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
            // 防止描述被覆盖
            { hid: 'description', name: 'description', content: pkg.description }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
        ],
        script: [{
            src: 'https://lib.baomitu.com/jquery/3.6.0/jquery.min.js'
        }]
    },
    /**
     * 配置中定义中间件
     */
    router: {
        middleware: 'auth',
        // 扩展路由
        extendRoutes(routes, resolve) {
            // console.log('routes', routes)
            routes.push({
                name: 'home',
                path: '/index',
                component: resolve(__dirname, 'pages/index.vue')
            })
        }
    },
    /*
     ** 自定义loading效果
     */
    // loading: { color: '#3B8070' },
    loading: '~/components/loading.vue',
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
        { src: '~plugins/ElementUI', ssr: true },
        '~/plugins/router.js',
        '~/plugins/mixins.js',
        { src: '~/plugins/axios', ssr: true }
    ],
    /**
     * 模块
     */
    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt',
        '@nuxtjs/style-resources'
    ],
    styleResources: {
        'scss': [
            './assets/scss/global.scss'
        ]
    },
    axios: {
        proxy: true, //开启axios跨域
        // prefix: '/api' // baseUrl
    },
    proxy: {
        '/api/': {
            target: 'http://127.0.0.1:3001',
            changeOrigin: true,
            pathRewrite: {
                // '^/api': ''
            }
        }
    },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['element-ui', 'axios'],
        transpile: [/^element-ui/],
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