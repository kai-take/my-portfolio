import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Works from '../views/Works.vue'
import Contact from '../views/Contact.vue'


Vue.use(VueRouter)

const routes = /*ルーティングの定義 */ [
  {
    path: '/',/*router-linkのto以降と同じ */
    name: 'Home',  /*コンポーネントの名前 */
    component: Home
  },
  {
    path: '/about', 
    name: 'About',   
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: About
  },
  {
    path:'/contact',
    name:'Contact',
    component:Contact
  },
  {
    path:'/works',
    name:'Works',
    component:Works
  }
]

// 以下はテンプレ、いじらなくて良い
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
