import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Params from '@/components/params'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
 mode:'history',
  routes: [{
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld,
    alias:'/Home1'
  },{
    path:'/params/:newsId(\\d+)/:newsTitle',
    name:'Params',
    component:Params,
    beforeEnter:(to,from,next)=>{
      //to去哪里 from从哪里来 next允许跳转 若不想跳转则不写next()或写成next(false)
      //next({path:'/'})跳转到根目录
      next();
    }
  },{
    path:'/goHome',
    redirect:'/'
  },{
    path:'/goParams/:newsId(\\d+)/:newsTitle',
    redirect:'/params/:newsId(\\d+)/:newsTitle'
  },{
    path:'/Hi1',
    component:Hi1,
    alias:'/jgchen'//别名''
  },{
    // 做一个404页面
    path:'*',
    component:Error
  }]
})
