import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/Customer'
import Category from '../views/Customer'
import Product from '../views/Product'
import ProductDetails from '../views/ProductDetailsView'
import Order from '../views/Order'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/customer',
    name: 'customer',
    component: Customer
  },
  {
    path: '/order',
    name: 'order',
    component: Order
  },
  {
    path: '/category',
    name: 'category',
    component: Category
  },
  {
    path: '/product',
    name: 'product',
    component: Product
  },
  {
    path: '/productDetails/:id',
    name: 'productDetails',
    component: ProductDetails
  },
  {
    path: '/about',
    name: 'about',
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
