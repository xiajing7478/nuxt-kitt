<template>
  <div v-if="loading">loading....</div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    }
  },
  methods: {
    /**
     * 这2个方法是nuxt约定号的，不可以顺便修改
     */
    start() {
      this.loading = true
    },
    finish() {
      setTimeout(() => {
        this.loading = false
      }, 300)
    }
  }
}
</script>