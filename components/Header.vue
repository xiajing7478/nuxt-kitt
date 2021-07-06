<template>
  <el-menu :default-active="activeIndex"  @select="handleSelect" active-text-color="#399" mode="horizontal">
    <el-menu-item v-for="(item, index) in navs" :key="index" :index="index + ''">
     {{item.title}}
    </el-menu-item>
  </el-menu>
  <!-- <nav>
    <nuxt-link to="/index" active-class="app_header--active">首页</nuxt-link>
    <nuxt-link to="/good" active-class="app_header--active">商品</nuxt-link>
    <nuxt-link to="/login" active-class="app_header--active">登录</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    <nuxt-link to="/userInfo" active-class="app_header--active">个人中心</nuxt-link>
  </nav> -->
</template>
<script>
export default {
  name: 'Header',
  data() {
    return {
      activeIndex: "-1",
      navs: [
        { path: '/index', title: '首页' },
        { path: '/good', title: '商品' },
        { path: '/userInfo', title: '个人中心' }
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(this.navs[key].path)
    }
  },
  watch: {
    $route: {
      immediate: true,
      handler(route) {
        let find = false
        this.navs.map((item, index) => {
          if (item.path == '/')
            this.$router.push('/')
          if (route.path === item.path) {
            this.activeIndex = index + ''
            find = true
          }
        })
        if (!find) {
          this.activeIndex = '-1'
        }
      }
    }
  }
}
</script>
<style scoped>
  /* .app_header--active {
    color: #fff;
    background-color: #399;
  }
  .img {
    width: 100%;
    height: 100%;
    background-image: url('~assets/imgs/nuxt渲染.png');
  } */
</style>
