<template>
  <div class="login-wrap">
    <h3>登录</h3>
    <el-divider></el-divider>
    <el-form label-position="top" :model="loginForm" status-icon :rules="rules" ref="loginForm" label-width="100px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="loginForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginBtn('loginForm')">登录</el-button>
        <el-button @click="regBtn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  name: 'login',
  data() {
      return {
        loginForm: {
          username: '',
          password: '',
        },
        rules: {
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ],
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
          ]
        }
      };
    },
    methods: {
      loginBtn(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
          } else {
            return false;
          }
        });
      },
      login() {
        this.$axios.post(`/api/?s=App.User.LoginExt&return_data=0&username=${this.loginForm.username}&password=${this.loginForm.password}&app_key=E541E3B0DC1DBF3E6CF71E31736A22F1&sign=7D536C801E7EFDE14A49F8ABE268EE6F`).then(res => {
          if (res.data.err_code == 0) {
            const { token, uuid } = res.data
            this.$cookies.set('user', { token, uuid })
            this.$store.commit('user/M_UPDATE_USER', { token, uuid })
            if (/login|reg/.test(this.$route.path)) {
              this.$router.replace('/userinfo')
            } else {
              this.$router.replace(this.$route.path)
            }
          }
        }).catch(err => {
          console.log('err', err)
        })
      },
      regBtn() {
        this.$router.push('/reg')
      }
    }
}
</script>
<style scoped>

</style>