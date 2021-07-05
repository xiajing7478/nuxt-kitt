<template>
  <h1>注册</h1>
</template>
<script>
export default {
  beforeRouteLeave (to, from, next) {
    // 页面后置路由守卫
    // let bl = window.confirm('是否离开?')
    // next(bl)
    next()
  }
}
</script>