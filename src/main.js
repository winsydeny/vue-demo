// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 导入mint-ui组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/header/style.css'

//导入mui样式
import './lib/css/mui.min.css'

Vue.config.productionTip = false
Vue.component(Header.name,Header)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
