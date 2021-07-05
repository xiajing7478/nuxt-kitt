<template>
  <div>
    <h1>商品</h1>
    {{product}}
    <nuxt-link to="/good/93?a=1&b=2">商品01</nuxt-link>
    <!-- // 也可以这样写 -->
    <nuxt-link :to="{ name: 'good-id', params: { id: 93 }, query: { a:11, b: 22 } }">商品02</nuxt-link>
    <nuxt-link to="/good/comment">评论</nuxt-link>
    <nuxt></nuxt>
  </div>
</template>
<script>
export default {}
</script>
