import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/components/IndexPage'
import ShowPage from '@/components/showPage'
import RegisterPage from '@/components/Register'
import StartPage from '@/components/Scene_start'

import 'expose-loader?$!expose-loader?jQuery!jquery'
import Category from '@/components/Category'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'index',
      component: IndexPage
    },
    {
      path: '/show/:id',
      name: 'show',
      component: ShowPage
    },
    {
      path: '/reg',
      name: 'register',
      component: RegisterPage
    },
    {
      path: '/',
      name: 'start',
<<<<<<< HEAD
      component: Scene_start
    },
    {
      path:'/category',
      name: 'category',
      component:Category
=======
      component: StartPage
>>>>>>> e21d93447babc0e8bcb4534cf3d419b48da86404
    }
  ]
})
