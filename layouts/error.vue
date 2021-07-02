<template>
  <div>
    <h2 v-if="error.statusCode==404">{{ error.message }}</h2>
    <h2 v-else>500服务器错误</h2>
    <nuxt-link to="/index">Home</nuxt-link>
  </div>
</template>
<script>
  export default {
    // 接受错误信息 error: { statusCode, message }
    props: ['error']
  }
</script>