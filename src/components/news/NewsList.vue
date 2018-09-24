<template>
    <div id="list">
            
        <ul class="mui-table-view" v-for="(item, index) in 10" :key="index">
            <router-link class="mui-table-view-cell mui-media" to="/home/newslist/newsinfo">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-left" src="https://img2.ph.126.net/SsWYhcteUZ-4l78TbZGN4g==/6632531215676985020.jpg">
                    <div class="mui-media-body">
                        幸福
                        <p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>
                    </div>
                </a>
            </router-link>
        </ul>
    </div>
</template>
<script>
    // XS7vq8Gz9SnsC24WLLtyukNmuq3TQj3GIOrVKcvf1pj3bvuorihz2WbiMBDIMKFj
    export default{
        name:'newlist',
        data(){
            return{

            }
        },
        methods:{
            getNews(){
                // this.$http.get('./service/news.json').then(result => {
                //     console.log(result);                    
                // })
                console.log("模拟api");
            }
        },
        
    }
</script>
<style scoped>
</style>