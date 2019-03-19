<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <div>
      <button @click="goBack">后退</button>
      <button @click="goBefore">前进</button>
      <button @click="goHome">跳到首页</button>
    </div>

    <router-link to="/">Home</router-link>|
    <router-link to="/params/198/jsPang website title">params</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/goParams/556/Tnsihy">goParams</router-link>|
    <router-link to="/Hi1">Hi1</router-link>|
    <router-link to="/jgchen">jgchen</router-link>|
    <router-link to="/Home1">Home1</router-link>

    |
    <transition name="fade" mode="out-in">
      <!-- name='fade'下边的css样式  mode='out-in'先出后入 -->
      <!-- 要想路由有过渡动画，需要在<router-view>标签的外部添加<transition> -->
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "App",
  methods:{
    goBack(){
      this.$router.go(-1);
    },
    goBefore(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/');
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter{
  opacity: 0;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave{
  opacity: 1;
}
.fade-leave-active{
  opacity: 0;
  transition:opacity .5s;
}
</style>
