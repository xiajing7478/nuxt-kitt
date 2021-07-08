<template>
<div>
  <h3>个人中心</h3>
  <p>用户名: {{userInfo.username}}</p>
  <p>注册时间: {{userInfo.register_time}}</p>
  <p>用户IP: {{userInfo.register_ip}}</p>
  <el-button @click="logout">注销</el-button>
</div>
</template>
<script>
export default {
  // 页面独享前置守卫
  middleware({ store, route, redirect }) {
    if (!store.state.user.token) {
      redirect('/login')
    }
  },
  async asyncData({ store, redirect, $axios }) {
    if (!store.state.user.token) {
      redirect('/login')
    } else {
      let { data } = await $axios.post(`/api/?s=App.User.Profile&uuid=${store.state.user.uuid}&token=${store.state.user.token}&app_key=E541E3B0DC1DBF3E6CF71E31736A22F1`)
      if (data.err_code === 0) {
       return {
          userInfo: data.info
        }   
      }
    }
  },
  methods: {
    logout() {
      this.$cookies.remove('user');
      this.$store.commit('user/M_UPDATE_USER', {})
      this.$router.push('/login')
    }
  }
}
</script>