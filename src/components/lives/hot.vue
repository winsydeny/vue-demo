<template>
    <div id="hot">
            <ul>
                <li v-for="item in imgs">
                    <img v-lazy="item" class="imgs">
                </li>
            </ul>
    </div>
</template>
<script>
    export default{
        name:'hot',
        data(){
            return {
                imgs:[
                "http://pic.qiantucdn.com/58pic/22/07/69/57b40b8f80f23_1024.jpg",
                "http://pic1.16pic.com/00/57/58/16pic_5758899_b.jpg",
                "http://pic.qiantucdn.com/58pic/22/72/01/57c6578859e1e_1024.jpg",
                "http://pic.qiantucdn.com/58pic/22/07/69/57b40b8f80f23_1024.jpg",
                "http://pic1.16pic.com/00/57/58/16pic_5758899_b.jpg",
                "http://pic.qiantucdn.com/58pic/22/72/01/57c6578859e1e_1024.jpg",

            ]
            }
        }
    }
</script>
<style>
    li{
    list-style:none;
}
image[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
.imgs{
    width: 90%;
  height: 300px;
  margin: auto;
}
</style>