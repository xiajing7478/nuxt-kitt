<template>
  <section class="container">
    <div>
      <h1 class="title">
        nuxt-kitt
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <h2>
        {{ list }}
      </h2>
      <!-- <img src="../assets/imgs/nuxt渲染.png"/> -->
      <nuxt-link :to="{ name: 'user', params: { newsId: 3306} }">userIndex</nuxt-link>
      <!-- <nuxt-link to="/user">userIndex</nuxt-link> -->
      <nuxt-link to="/user/one?id=5">userOne</nuxt-link>

      <el-row :gutter="10">
        <el-col :span="24">
          <el-button type="primary">按钮</el-button>
        </el-col>
        <el-col :span="24">
          <ul>
            <li v-for="item in info" :key="item.value">{{item.text}}</li>
          </ul>
        </el-col>
      </el-row>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  // asyncData的方法会把值返回到data中。是组件创建（页面渲染）之前的动作，所以不能使用this.info,
  // 一定要return出去获取到的对象，这样就可以在组件中使用，这里返回的数据会和组件中的data合并。
  // 这个函数不光在服务端会执行，在客户端同样也会执行。
  // asyncData() {
  //   return axios.get('http://106.14.184.49:19001/api/Enum/LoadAll').then(res => {
  //     console.log(res.data.result.enums.AbnormalAmountTypeEnum)
  //     return {
  //       info: res.data.result.enums.AbnormalAmountTypeEnum
  //     }
  //   }).catch(err => {
  //     console.log(err)
  //   })
  // },

  data() {
    return {
      msg: 'nuxt....'
    }
  },

  /**
   * ssr && csr
   */
   // 读取数据，返回给组件
  async asyncData({$axios}) {
    // console.log('asyncData')
    // console.log($axios)
    // console.log(axios)
    let { data } = await axios.get('http://106.14.184.49:19001/api/Enum/LoadAll')
    let res = await $axios({ url: '/data/list.json'})
    // let result = await $axios.get('http://127.0.0.1:5001/login')
    return {
      info: data.result.enums.AbnormalAmountTypeEnum,
      list: res.data.title,
      // user: result.data
    }
  },
  // 读取数据给vuex 
  fetch({ store }) {
    console.log('fetch')
  },
  // 参数的有效性
  validate({ params, query }) {
    console.log('validate...')
    return true
  },

  // 这2个周期可以拿到this，指向vue
  beforeCreate() { console.log('beforeCreate') },
  created( ) { console.log('created')},

  /**
   * csr(客服端)
   */
  beforeMount() { console.log('beforeMount') },
  mounted() { console.log('mounted') },
  beforeUpdate() { console.log('beforeUpdate') },
  updated() { console.log('updated') },
  beforeMount() { console.log('beforeMount') },
  unmounted() { console.log('unmounted') },
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

