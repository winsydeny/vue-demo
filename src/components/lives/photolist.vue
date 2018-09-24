<template>
    <div id="photo">
        
            <div id="slider" class="mui-slider">
                    <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
                        <div class="mui-scroll">
                            <router-link class="mui-control-item mui-active" to="/home/lives/item1">
                                推荐
                            </router-link>
                            <router-link class="mui-control-item" to="/home/lives/item2">
                                热点
                            </router-link>
                            <a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
                                北京
                            </a>
                            <a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
                                社会
                            </a>
                            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                                娱乐
                            </a>
                            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                                娱乐
                            </a>
                            <a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
                                娱乐
                            </a>
                        </div>
                    </div>
                </div>

            <router-view></router-view>              
    </div>
</template>
<script>
    import Vue from 'vue'
    import Router from 'vue-router'
    import pic from './hot'
    import recommend from './recommend'
    Vue.use(Router)
   let router =  new Router({
        routes:[
            {
                path:'/home/lives/item2',
                component:pic
            },
            {
                path:'/home/lives/item1',
                component:recommend
            }
        ]
    })
    export default{
        name:'photo',
        router,        
    }
</script>
<style>

</style>