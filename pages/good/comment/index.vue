<template>
  <div>
    <p>{{num | fillZero}}</p>  
    <div>
      <p v-direct1='"red"'>direct1</p>
      <p v-direct2>{{ direct }}</p>
    </div>
    <p>
      <uc-button></uc-button>
    </p>
  </div>
</template>
<script>
export default {
  mounted() {
    this.$show()
  },
  data() {
    return {
      num: 9,
      direct: 'direct2'
    }
  },
}
</script>