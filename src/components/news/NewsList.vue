<template>
    <div id="list">
        <ul class="mui-table-view" v-for="(item, index) in news" :key="index">
            <router-link class="mui-table-view-cell mui-media" :to="'/home/newslist/newsinfo/'+item.aid">
                    <img class="mui-media-object mui-pull-left" src="https://img2.ph.126.net/SsWYhcteUZ-4l78TbZGN4g==/6632531215676985020.jpg">
                    <div class="mui-media-body">
                        测试
                        <p class='mui-ellipsis'>{{ item.title }}</p>
                    </div>
                </a>
            </router-link>
        </ul>
        <p v-show="loading" class="loadmore">
            <input type="button" value="loadMore..." @click="loadmore">
          </p>       
    </div>
</template>
<script>
    // XS7vq8Gz9SnsC24WLLtyukNmuq3TQj3GIOrVKcvf1pj3bvuorihz2WbiMBDIMKFj
    export default{
        name:'newlist',
        data(){
            return{
                news:[],
                page:1,
                loading:true,
                wrapperHeight:0
            }
        },
        methods:{
            getNews(){
                this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1').then((res) => {
                    res.body.result.forEach(ele => {
                        this.news.push(ele);
                    });
                },(err)=>{
                    console.log(err);
                })
            },
            loadmore() {
                // console.log('11');
                this.page += this.page;
                this.$http.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page='+this.page).then((res) => {
                    res.body.result.forEach(ele => {
                        this.news.push(ele);
                    });
                },(err)=>{
                    console.log(err);
                })
            }
    },
        created() {
            this.getNews();
        },
    }
</script>
<style scoped>

    #list{
        padding: 0 6px;
        overflow-x: hidden;
    }
    img{
        margin-top: 18px;
    }
    .loadmore{
        width: 96px;
        height: 46px;
        margin: 10px auto;

    }
    .loadmore input{
        /* margin: 6px 0; */
    }
</style>