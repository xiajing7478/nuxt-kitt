import Vue from 'vue'

const show = () => {
    console.log('全局show...')
}

Vue.prototype.$show = show