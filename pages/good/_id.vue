<template>
  <div>
    <h1>详情页{{$route.params.id}}</h1>
  </div>
</template>
<script>
export default {
  name: 'good-detail',
  validate({ params, query }) {
    return typeof params.id === 'number'
  },
  // 页面自定义过渡效果
  transition: 'test'
}
</script>
<style scoped>
  .test-enter-active, .test-leave-active {
    transition: 0.5s ease all;
}
  .test-enter, .test-leave-active {
    margin-left: -62.5rem;
}
</style>