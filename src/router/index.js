import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShoppingContainer from '../components/tabbar/ShoppingContainer'
import SearchContainer from '../components/tabbar/SearchContainer'


Vue.use(Router)

export default new Router({
  routes: [ //配置路由规则
    {
      path:'/home',
      component:HomeContainer
    },
    {
      path:'/member',
      component:MemberContainer
    },
    {
      path:'/shopping',
      component:ShoppingContainer
    },
    {
      path:'/search',
      component:SearchContainer
    },
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类为 link-active-aclass  
})
