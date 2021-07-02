<template>
  <nav>
    <nuxt-link to="/index" active-class="app_header--active">首页</nuxt-link>
    <nuxt-link to="/good" active-class="app_header--active">商品</nuxt-link>
    <nuxt-link to="/login" active-class="app_header--active">登录</nuxt-link>
    <nuxt-link to="/reg" active-class="app_header--active">注册</nuxt-link>
    <nuxt-link to="/userInfo" active-class="app_header--active">个人中心</nuxt-link>
  </nav>
</template>
<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
  .app_header--active {
    color: #fff;
    background-color: #399;
  }
  .img {
    width: 100%;
    height: 100%;
    background-image: url('~assets/imgs/nuxt渲染.png');
  }
</style>
