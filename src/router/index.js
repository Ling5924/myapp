import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Category from '../views/Category.vue'
import User from '../views/User.vue'
import Shopcart from '../views/Shopcart.vue'
import Recommend from '../views/order/Recommend.vue'
import Latte from '../views/order/Latte.vue'
import Coffee from '../views/order/Coffee.vue'
import Renaice from '../views/order/Renaice.vue'
import GoodsInfo from '../views/goods/GoodsInfo.vue'
// 注册路由插件
Vue.use(VueRouter)
 
// 
const routes = [
  { path: '/', redirect: '/home', meta: { title: '首页' } },
  { path: '/category', redirect: '/category/recommend', meta: { title: '首页' } },
  { path: '/home', component: Home, name: 'home', meta: { title: '首页' } },
  { path: '/category', component: Category, name: 'category', meta: { title: '菜单' } ,children:[
    {path: 'recommend', component: Recommend,},
    {path:'latte',component:Latte},
    {path:'coffee',component:Coffee},
    {path:'renaice',component:Renaice},
  ]},
  { path: '/shopcart', component: Shopcart, name: 'shopcart', meta: { title: '购物车' } },
  { path: '/user', component: User, name: 'user', meta: { title: '我的' } },
  { path: '/goodsinfo/:id', component: GoodsInfo, props: true, name: 'goodsinfo', meta: { title: '商品详细' } },
]
 
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})
export default router