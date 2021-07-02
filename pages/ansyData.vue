<template>
  <h1>asyncData demo</h1>
</template>
<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        name: 'hello nuxt...'
      }
    },
    asyncData() {
     axios.get() 
    }
  }
</script>