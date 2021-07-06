<template>
  <div class="login-wrap">
    <h3>登录</h3>
    <el-divider></el-divider>
    <el-form label-position="top" :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
      <el-form-item label="用户名" prop="username">
        <el-input v-model.number="ruleForm.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="loginBtn('ruleForm')">登录</el-button>
        <el-button @click="regBtn">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { encrypt } from "../utils/index";
export default {
  name: 'login',
  data() {
      return {
        ruleForm: {
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
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      login() {
        const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiYWRtaW4iLCJBc3BOZXQuSWRlbnRpdHkuU2VjdXJpdHlTdGFtcCI6IjE0MDlmZDI2LTcyOGUtMjA1MS01NjcxLTM5ZjU1MWVmN2E5NCIsImh0dHA6Ly9zY2hlbWFzLm1pY3Jvc29mdC5jb20vd3MvMjAwOC8wNi9pZGVudGl0eS9jbGFpbXMvcm9sZSI6IkFkbWluIiwiaHR0cDovL3d3dy5hc3BuZXRib2lsZXJwbGF0ZS5jb20vaWRlbnRpdHkvY2xhaW1zL3RlbmFudElkIjoiMSIsInN1YiI6IjEiLCJqdGkiOiI3ODMyOGU1NC0wZTlmLTQ2Y2EtYjQ5Mi1kNWMwYzQ1MTczZTgiLCJpYXQiOjE2MjU0NTU5ODQsIm5iZiI6MTYyNTQ1NTk4NCwiZXhwIjoxNjI1NTQyMzg0LCJpc3MiOiJDTVMiLCJhdWQiOiJDTVMifQ.ReZ2YwPMpffDdIwWgebfacsZNq5PklcNxZ6HssVL-lg'
        this.$cookies.set('user', { token: token })
        this.$store.commit('user/M_UPDATE_USER', { token: token })
        if (/login|reg/.test(this.$route.path)) {
          this.$router.replace('/userInfo')
        } else {
          this.$router.replace(this.$route.path)
        }
      },
      regBtn() {
        this.$router.push('/reg')
      }
    }
}
</script>
<style scoped>

</style>