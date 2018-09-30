<template>
    <div id="info">
        <div v-html="info"></div>
        <!-- <h2>hello world</h2> -->
        <!-- <h1>sfaf</h1> -->
        <comment></comment>
    </div>
</template>
<script>
    import comment from '../subcomponents/comment'
    export default{
        name:'fn',
        data(){
           return {
                 info:''
            }
        },
        components:{
            comment
        },
        methods:{
            getNews(){
                let aid = this.$route.params.aid;
                console.log(aid);
                let api = 'http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
                console.log(api);
                this.$http.get(api).then((res)=>{
                    this.info = res.body.result[0].content;
                    console.log(res);
                },(err)=>{
                    console.log(err);
                })
            }
            
        },
        created() {
            // console.log(this.$route.params.aid);
            this.getNews();
        },
        

    }
</script>
<style>
    #info div{
        overflow-x: hidden;
        padding: 0 6px;
    }
</style>