import Vue from 'vue'
import store from './store/'
import Router from 'vue-router'
import Block from './views/Block'
import Home from './views/Home.vue'
import Login from './views/Login'
import Products from './views/Products'
import Profile from './views/Profile'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/block',
      name: 'block',
      component: Block,
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
      meta: {
        permission: 'administrator'
      }
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: {
        permission: 'manager'
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(x => x.meta.permission)) {
    let permission = to.matched.find(x => x.meta.permission).meta.permission
    if (store.getters['users/permission']) {
      if (store.getters['users/permission'].find(x => x === permission)) {
        next()
        return
      }
      next('/block')
      return
    }    
    next('/login')
  } else {
    next()
  }
})

export default router
