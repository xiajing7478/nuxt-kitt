<template>
  <h1>this is user one...{{id}}-{{msg}}</h1>
</template>
<script>
  export default {
    data() {
      return {
        id: null,
        msg: null
      }
    },
    asyncData(context) {
      console.log(context)
      // this.msg = context.$route.params
    },
    created() {
      this.id = this.$route.query.id
    },
    //独立设置head信息
    head() {
      return {
        title: 'abcd...'
      }
    },
  }
</script>