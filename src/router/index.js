import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import AboutUs from '@/pages/AboutUs'
import Register from '@/pages/Register'
import User from '@/pages/User'

Vue.use(Router)

const routes = [
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
    name: 'about us',
    path: '/AboutUs',
    component: AboutUs
  },
  {
    name: 'register',
    path: '/Register',
    component: Register
  }
]

const router = new Router({ routes })

export default router