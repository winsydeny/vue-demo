<template>
  <div id="app">
    <!-- 顶部 header 区域 -->
    <mt-header fixed :title="tittle"></mt-header>

      <!-- 中间路由 router-view  区域 -->
      <!-- 实现切换动画效果   -->
    <transition>
        <router-view></router-view>      
    </transition>

    <!-- 底部 tabbar 区域 -->
    <nav class="mui-bar mui-bar-tab" v-show="display">
        <router-link class="mui-tab-item" to="/home">
          <span class="mui-icon mui-icon-home"></span>
          <span class="mui-tab-label">首页</span>
        </router-link>
        <router-link class="mui-tab-item" to="/member">
          <span class="mui-icon mui-icon-contact"></span>
          <span class="mui-tab-label">会员</span>
        </router-link>
        <router-link class="mui-tab-item" to="/shopping">
          <span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
          <span class="mui-tab-label">购物车</span>
        </router-link>
        <router-link class="mui-tab-item" to="/search">
          <span class="mui-icon mui-icon-search"></span>
          <span class="mui-tab-label">搜素</span>
        </router-link>
      </nav>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      tittle:"vue-demo",
      display:true
    }
  },
  components:{ scroll },
  methods:{
            getNews(){
                  // this.$http.jsonp('http://api.avatardata.cn/ActNews/Query?key=fc68d6e5d8844d3089a4c8559e48cdc6&keyword=奥巴马',{jsonp:'_callback'})  
                  // .then(result => {
                  //     console.log(result);                    
                  // })
            }
          },
            created() {
              this.getNews();
          },
}

</script>

<style scoped>
  *{
    padding: 0;margin: 0;
  }
  #app{
    /* padding: 40px 0;  */
    overflow-x: hidden;
  }

  .v-enter{
    opacity: 0;
    transform: translateX(100%);

  }
  .v-leave-to{
    opacity: 0;
    transform: translateX(-100%);
    position: absolute;
  }
  .v-enter-active,
  .v-leave-active{
      transition: all 0.2s ease;
  }
</style>
