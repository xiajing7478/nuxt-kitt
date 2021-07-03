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