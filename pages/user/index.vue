<template>
  <h1 class="title">this is user index...{{newsId}}</h1>
</template>
<script>
export default {
  data() {
    return {
      newsId: null
    }
  },
  asyncData(context) {
    let newsId = context.route.params.newsId
    console.log(newsId)
  },
  // nuxt中使用validate方法进行路由参数校验，这个方法必须返回一个布尔值，为true表示校验通过，
  // 为false表示校验失败。注意validate不能写到methods属性中。
  validate(obj) {
    return /^\d+$/.test(obj.params.newsId)
  }
}
</script>
<style>
  .title {
    color: red;
  }
</style>