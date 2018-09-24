<template>
    <div id="comment">
        <h3>发表评论</h3><hr>
        <textarea maxlength="120" placeholder="please input words" v-model="msg"></textarea>
        <div class="btn" @click="publish"><button>点击发表</button></div><br>
        <div class="coms">
            <div class="item" v-for="(item, index) in cms" :key="index">
                <div class="item-head">
                    <span>{{ item.times }}</span>
                </div>
                <div class="item-body">
                    <span>{{ item.content }}</span>
                </div>
            </div>
            
        </div>
        <div class="btn"><button>加载更多</button></div>
    </div>
</template>
<script>
    export default{
        name:'comment',
        data(){
            return {
                msg:'',
                cms:[
                    {'times':'用户:null 发表时间: 2018-11-22 19:23:20','content':'今天是端午假日'},
                    {'times':'用户:null 发表时间: 2018-11-22 19:23:20','content':'今天是端午假日'},
                    ]
            }
        },
        methods:{
            publish(){
                let obj = {
                    times:'用户:null 发表时间: 2018-11-22 19:23:20',
                    content:this.msg
                }
                this.cms.push(obj);
                this.msg = '';
            }
        }
    }
</script>
<style scoped>
    #comment{
        padding: 0 10px;
        height: 100%;
    }
    #comment .btn{  
        width: 80px;
        margin: 0 auto;
    }
    button{
        background: rgb(4, 129, 179);
        color: white;
    }
    .item-head{
        background: grey;
    }
    .item-body{
        padding: 8px 0;
    }
</style>