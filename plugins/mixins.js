import Vue from 'vue'
import * as filters from '../assets/script/filters'
// 全局方法
const show = () => {
    console.log('全局方法show...')
}
Vue.prototype.$show = show
    // 全局过滤器
Object.keys(filters).forEach(key => Vue.filter(key, filters[key]))

// 全局指令
import direct1 from '../assets/script/directives/direct1'
import direct2 from '../assets/script/directives/direct2'
Vue.directive('direct1', direct1)
Vue.directive('direct2', direct2)

// 全局组件
import UCButton from '../components/global/index'
Vue.component('uc-button', UCButton)

// mixin methods 
Vue.mixin({
    methods: {
        $seo(title, content, payload = {}) {
            return {
                title,
                meta: [
                    { hide: 'description', name: 'keywords', content }
                ].concat(payload)
            }
        }
    }
})