<template>
    <div id="home">

        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
                <mt-swipe-item v-for="(item, index) in imgs" :key="index" class="number">
                    <p>{{item}}</p>
                </mt-swipe-item>
        </mt-swipe>

        <!-- 九宫格 -->

        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/newslist">
		                    <span class="mui-icon mui-icon-home"></span>
		                    <div class="mui-media-body">News</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><router-link to="/home/lives">
		                    <span class="mui-icon mui-icon-email"></span>
		                    <div class="mui-media-body">photo</div></router-link></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-chatbubble"></span>
		                    <div class="mui-media-body">Chat</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-location"></span>
		                    <div class="mui-media-body">location</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-search"></span>
		                    <div class="mui-media-body">Search</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <span class="mui-icon mui-icon-phone"></span>
		                    <div class="mui-media-body">Phone</div></a></li>
		        
		        </ul> 
		</div>

    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import 'mint-ui/lib/Toast/style.css'
    export default{
        name:'home',
        data(){
            return {
                imgs:[1,2,3]
            }
        },
        methods:{
            getImg(){
                // this.$http.get("http://vue.gaf.com").then(result => {
                //     // console.log(result.body);
                //         Toast("请求失败");
                    
                // })

            }
        },
        // created() {
        //     this.getImg();
        //     Toast("请求失败");
            
        // },
    }

</script>
<style scoped>
    .mint-swipe{
        height: 200px;
    }
    .mint-swipe-item:nth-child(1){
        background: red;
    }
    .mint-swipe-item:nth-child(2){
        background: green;
    }
    .mint-swipe-item:nth-child(3){
        background: cyan;
    }
    .mui-grid-view.mui-grid-9,.mui-grid-view.mui-grid-9 .mui-table-view-cell{
        border:none;
        background:white;
    }
    .number{
        /* font-size: 60px; */
        /* color: black; */
        text-align: center;
        line-height: 200px;
    }
    p{
        color: black;
        font-size: 80px;
    }
</style>