import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import Home from '@/views/Home'
import Login from '@/views/Login'
import Search from '@/views/Search'
import Shopcar from '@/views/Shopcar'

Vue.use(VueRouter)

//解决路由下跳转到相同路由下的报错问题
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


export default new VueRouter({
  routes: [
    {
      name: "home",
      path: "/home",
      component: Home
    },
    {
      name: "search",
      path: "/search:keywords?",
      component: Search,
      meta:{show:false}
    },
    {
      name: "login",
      path: "/login",
      beforeEnter: (to, from, next) => {
        if (store.state.isDisplay) {
          next()
        } else {
          next('/home');
        }
        
      },
      component: Login
    },
    {
      name: "shopcar",
      path: "/shopcar",
      component: Shopcar
    },
    {
      path: '*',
      redirect: "/home"
    }
  ]
})
