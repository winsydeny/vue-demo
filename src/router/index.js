import Vue from 'vue'
import Router from 'vue-router'
import HomeContainer from '../components/tabbar/HomeContainer'
import MemberContainer from '../components/tabbar/MemberContainer'
import ShoppingContainer from '../components/tabbar/ShoppingContainer'
import SearchContainer from '../components/tabbar/SearchContainer'
import newsinfo from '../components/news/Newsinfo'
import NewsList from '../components/news/NewsList'
import photolist from '../components/lives/photolist'
import pic from '../components/lives/hot'
import recommend from '../components/lives/recommend'
import game from '../components/lives/game'
import music from '../components/lives/music'
import physical from '../components/lives/physical'


Vue.use(Router)

export default new Router({
  routes: [ //配置路由规则   
    // 通过路由重定向，让首页显示home页面
    {
      path:'/',
      redirect:'/home'
    },
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
    {
      path:'/home/newslist',
      component:NewsList
    },
    {
      path:'/home/newslist/newsinfo/:aid',
      component:newsinfo
    },
    {
      path:'/home/lives',
      component:photolist,
      children:[
        {
          path:'/home/lives',
          redirect:'/home/lives/item1'
        },
        {
          path:'/home/lives/item1',
          component:recommend
        },{
          path:'/home/lives/item2',
          component:pic
        },{
          path:'/home/lives/item3',
          component:game
        },
        {
          path:'/home/lives/item4',
          component:music
        },
        {
          path:'/home/lives/item5',
          component:physical
        }
      ]
    },
    // {
    //   path:'home/photolist/item2',
    //   component:pic
    // }
  ],
  linkActiveClass:'mui-active' //覆盖默认路由高亮的类，默认的类为 link-active-aclass  
})
