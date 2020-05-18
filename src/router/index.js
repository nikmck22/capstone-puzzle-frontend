import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import Logout from '../views/Logout.vue';
import Index from '../views/Index.vue';
import Show from '../views/Show.vue';
import Cart from '../views/Cart.vue';
import Orders from '../views/Orders.vue';
import Users from '../views/Users.vue';

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout
  },
  {
    path: '/puzzles',
    name: 'index',
    component: Index
  },
  {
    path: '/puzzles/:id',
    name: 'show',
    component: Show
  },
  {
    path: '/carted_puzzles',
    name: 'cart',
    component: Cart
  },
  {
    path: '/orders',
    name: 'orders',
    component: Orders
  },
  {
    path: '/users/:id',
    name: 'users',
    component: Users
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
