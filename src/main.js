import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import 'lib-flexible/flexible'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { Lazyload } from 'vant';
import VueCookies from 'vue-cookies'


Vue.use(Vant);
Vue.use(VueAxios, axios)
Vue.use(Lazyload);
Vue.use(VueCookies)

Vue.config.productionTip = false

// 局部配置携带cookie
// withCredentials 表示跨域请求时是否需要使用凭证
withCredentials:false, // 默认的

// 配置请求基础路径
axios.defaults.baseURL = 'http://192.168.48.131:10002'

// 全局配置请求时携带cookie
axios.defaults.withCredentials = true

// 配置请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8'
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
