<template>
    <div id="photo">
        
            <div class="photobtn">
                    <div>
                        <div>
                            <router-link class="btn" to="/home/lives/item1">
                                <span>推荐</span>
                            </router-link>
                            <router-link class="btn" to="/home/lives/item2">
                                <span>热点</span>
                            </router-link>
                            <router-link class="btn" to="/home/lives/item3">
                                <span>游戏</span>
                            </router-link>
                            <router-link class="btn" to="/home/lives/item4">
                                <span>音乐</span>
                            </router-link>
                            <router-link class="btn" to="/home/lives/item5">
                                <span>体育</span>
                            </router-link>
                        </div>
                    </div>
                </div>
            <transition>
            <router-view></router-view>              
            </transition>
    </div>
</template>
<script>
    export default{
        name:'photo', 
        data(){
            return {
                show:true
            }
        },
        created() {
            
        },
        methods:{
            toggle(){
                this.show = !this.show;
                console.log(this.show)
            }
        }  
    }
</script>
<style scoped>
    span{
        color: black;
        padding: 12px;
    }
    #photo{
        margin-top: 20px; 
    }
    .photobtn{
        width: 82%;
        margin: 0 auto;

    }
    .btn:hover span{
        color: rgb(11, 102, 163);
    }
    .fit{
        color: rgb(11, 102, 163);
       
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
      transition: all 0.5s ease;
  }
    
</style>