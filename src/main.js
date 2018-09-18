// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'
// 导入mint-ui组件
import { Header,Swipe,SwipeItem } from 'mint-ui'
import 'mint-ui/lib/header/style.css'
import 'mint-ui/lib/swipe/style.css'
//导入mui样式
import './lib/css/mui.min.css'
import './lib/css/icons-extra.css'
Vue.config.productionTip = false

Vue.use(vueResource)
Vue.component(Header.name,Header)
Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)
// Vue.component(Toast.name,Toast)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,  //挂在路由对象到vue实例
  components: { App },
  template: '<App/>'
})
