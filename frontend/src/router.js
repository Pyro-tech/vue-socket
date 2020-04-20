import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home.vue'
import Admin from '@/views/Admin.vue'
import Page404 from '@/views/404.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/admin-settings',
      name: 'admin',
      component: Admin
    },
    {
      path: '*',
      name: '404',
      component: Page404
    }
  ]
})