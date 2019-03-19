import Vue from 'vue';
// 最完整的写法是import Vue from "../node_modules/vue/dist/vue.js  Vue是存在于vue.js中的";
import Vuex from 'vuex';
Vue.use(Vuex);

//声明一个常量
const state = {
    count:1
};

export default new Vue({
    state
})