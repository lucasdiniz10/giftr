import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import AboutUs from '@/pages/AboutUs'
import Register from '@/pages/Register'
import User from '@/pages/User'
import Ongs from '@/pages/Ongs'
import Error404 from '@/pages/Error404'
import UserHistoric from '@/pages/UserHistoric'


Vue.use(Router)

export default new Router({
  mode: 'history', 
  routes: [
    {
      name: 'home',
      path: '/',
      component: Home,
    },
    {
      name: 'login',
      path: '/login',
      component: Login
    },
    {
      name: 'user',
      path: '/User',
      component: User
    },
    {
      name: 'user-historic',
      path: '/User/historic',
      component: UserHistoric
    },
    {
      name: 'about us',
      path: '/AboutUs',
      component: AboutUs
    },
    {
      name: 'register',
      path: '/Register',
      component: Register
    },
    {
      name: 'ongs',
      path: '/ongs',
      component: Ongs
    },

    // Always leave this as last one,
    // but you can also remove it
    {
      name:'error404',
      path:'*',
      component: Error404
    }
  ]  
})