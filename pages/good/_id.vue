<template>
  <div>
    <h1>详情页{{$route.params.id}}</h1>
    {{product}}
  </div>
</template>
<script>
export default {
  name: 'good-detail',
  // validate({ params, query }) {
  //   return typeof params.id === 'number'
  // },
  async asyncData({ $axios }) {
    try {
      let result = await $axios.get('http://106.14.184.49:19001/api/services/app/DTContractPrice/GetOne?id=93')
      return {
        product: result.data.result
      }
    } catch(error) {
      console.log('err', error)
    }
  },
  // 页面自定义过渡效果
  transition: 'test'
}
</script>