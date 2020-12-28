import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import City from '../views/City.vue'
import Detail from '../views/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/city',
    name: 'city',
    component: City
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes
})

export default router
