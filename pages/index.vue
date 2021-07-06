<template>
  <section class="container">
    <div>
      <h2 class="title">
        nuxt-kitt
      </h2>
      <h2>
        <!-- {{ list }} -->
      </h2>
      <!-- <h2>{{user}}</h2> -->
      <h4>vuex操作</h4>
      <el-button type="primary" @click="getStore">编程时操作</el-button>
      <h1>{{token}}</h1>
      <!-- <img src="../assets/imgs/nuxt渲染.png"/> -->
      <nuxt-link :to="{ name: 'user', params: { newsId: 3306} }">userIndex</nuxt-link>
      <!-- <nuxt-link to="/user">userIndex</nuxt-link> -->
      <nuxt-link to="/user/one?id=5">userOne</nuxt-link>

      <el-row :gutter="10">
        <el-col :span="24">
          <el-button type="primary">按钮</el-button>
        </el-col>
        <el-col :span="24">
          <!-- <ul>
            <li v-for="item in info" :key="item.value">{{item.text}}</li>
          </ul> -->
        </el-col>
        <!-- <el-col :span="24">
            <img src='~assets/imgs/nuxt渲染.png' width="100%;" alt="">
        </el-col> -->
      </el-row>
    </div>
  </section>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions} from 'vuex'
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
      msg: 'nuxt....',
      // token: this.$store.state.user.token
    }
  },
  computed: {
    // token() {
    //   return this.$store.state.user.token
    // },
    ...mapState('user', ['token'])
  },
  methods: {
    getStore() {
      // this.$store.dispatch('user/A_UPDATE_USER', { token: '1234'} )
      // this.$store.commit('user/M_UPDATE_USER', { token: '123456' })
      // 可以用这个
      this.A_UPDATE_USER({ token: '12345'})
      // this.M_UPDATE_USER({ token: '1234567'})
    },
    ...mapActions('user', ['A_UPDATE_USER']),
    ...mapMutations('user', ['M_UPDATE_USER'])
  },
  /**
   * ssr && csr
   */
   // 读取数据，返回给组件
  async asyncData({$axios}) {
    // let { data } = await axios.get('http://106.14.184.49:19001/api/Enum/LoadAll')
    let res = await $axios({ url: '/data/list.json'})
    // let result = await $axios.get('http://127.0.0.1:5001/login')
    return {
      // info: data.result.enums.AbnormalAmountTypeEnum || [],
      list: res.data.title || '',
      // user: result.data
    }
  },
  // 读取数据给vuex 
  fetch({ $axios, store }) {
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

  //独立设置head信息
  head() {
    return {
      title: 'abcd...'
    }
  }
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

