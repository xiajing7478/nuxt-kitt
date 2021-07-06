<template>
<div>
  <h3>个人中心</h3>
  <el-button @click="logout">注销</el-button>
</div>
</template>
<script>
export default {
//  middleware({ store, route, redirect }) {
//    console.log('页面独享前置守卫')
//    redirect('/login')
//  } 

  methods: {
    logout() {
      this.$cookies.remove('user');
      this.$store.commit('user/M_UPDATE_USER', {})
      this.$router.push('/login')
    }
  }
}
</script>