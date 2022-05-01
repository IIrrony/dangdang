import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from '@/components/TypeNav'
import Header from '@/components/Header'
import Topheader from '@/components/Topheader'
import Footinfo from "@/components/Footinfo"
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "swiper/css/swiper.css"

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component("TypeNav", TypeNav);
Vue.component("Header", Header);
Vue.component("Topheader", Topheader);
Vue.component("Footinfo", Footinfo);


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')