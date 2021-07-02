# nuxt-kitt

> Nuxt.js project

└─nuxt-kitt
  ├─.nuxt               // Nuxt自动生成，临时的用于编辑的文件，build
  ├─assets              // 用于组织未编译的静态资源如LESS、SASS或JavaScript,对于不需要通过 Webpack 处理的静态资源文件，可以放置在 static 目录中
  ├─components          // 用于自己编写的Vue组件，比如日历组件、分页组件
  ├─layouts             // 布局目录，用于组织应用的布局组件，不可更改⭐
  ├─middleware          // 用于存放中间件
  ├─node_modules
  ├─pages               // 用于组织应用的路由及视图,Nuxt.js根据该目录结构自动生成对应的路由配置，文件名不可更改⭐
  ├─plugins             // 用于组织那些需要在 根vue.js应用 实例化之前需要运行的 Javascript 插件。
  ├─static              // 用于存放应用的静态文件，此类文件不会被 Nuxt.js 调用 Webpack 进行构建编译处理。 服务器启动的时候，该目录下的文件会映射至应用的根路径 / 下。文件夹名不可更改。⭐
  └─store               // 用于组织应用的Vuex 状态管理。文件夹名不可更改。⭐
  ├─.editorconfig       // 开发工具格式配置
  ├─.eslintrc.js        // ESLint的配置文件，用于检查代码格式
  ├─.gitignore          // 配置git忽略文件
  ├─nuxt.config.js      // 用于组织Nuxt.js 应用的个性化配置，以便覆盖默认配置。文件名不可更改。⭐
  ├─package-lock.json   // npm自动生成，用于帮助package的统一设置的，yarn也有相同的操作
  ├─package.json        // npm 包管理配置文件
  ├─README.md

链接：https://juejin.cn/post/6844903833840123912

参考：https://www.bilibili.com/video/BV13Z4y1T74J?p=12&spm_id_from=pageDriver
## Nuxt 生命周期
// 运行在服务端
1. nuxtServerInit  => store action
2. middleware => nuxt.config.js, matching layout, matching page&children
   nuxt.config.js -> 匹配布局 -> 匹配页面 
3. validate
   参数校验，return Boolean, true => pass, false => 404  
4. asyncData & fetch
5. Render

// 同时在server和client
6. beforeCreate && created

// 在client端
7. beforeMount() { console.log('beforeMount') },
   mounted() { console.log('mounted') },
   beforeUpdate() { console.log('beforeUpdate') },
   updated() { console.log('updated') },
   beforeMount() { console.log('beforeMount') },
   unmounted() { console.log('unmounted') },

## Nuxt路由
   约定式
      展示区: <nuxt/>
      声明式跳转     
        <nuxt-link to="/good/1?a=1&b=2">商品01</nuxt-link>
        <!-- // 也可以这样写 -->
        <nuxt-link :to="{ name: 'good-id', params: { id: 2}, query: { a:11, b: 22 } }">商品02</nuxt-link>
            name: 路由名 目录名-其他目录-文件名
            params: key  要对等文件名

      子路由
        目录代表子路由，子路由内部同级的文件，代表的是同一级路由

    路由守卫
      前置
        依赖中间件middleware，插件
        全局守卫：nuxt.config 指向middleware
                 layouts定义中间件
        组件独享守卫： middleware
          

## Build Setup

``` bash
# install dependencies
$ npm install # Or yarn install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, checkout the [Nuxt.js docs](https://github.com/nuxt/nuxt.js).

