<template>
<div>
    <!-- template的内容需要用一个大的div标签包括起来 否则会报错 -->
    <h2>{{msg}}</h2>
    <p>newsId:{{$route.params.newsId}}</p>
    <p>newsTitle:{{$route.params.newsTitle}}</p>
</div>
</template>
<script>
export default {
    data(){
        return {
            msg:'params page'
        }
    },
    beforeRouteEnter:(to,from,next)=>{
        console.log("准备进入params路由模板");
        next();
    },
    beforeRouteLeave:(to,from,next)=>{
        console.log("准备离开params路由模板");
        next();
    }
}
</script>
<style scope>

</style>

