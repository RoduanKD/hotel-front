import store from '@/store'
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    meta: {
      auth: false,
    },
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
  },
  {
    path: '/review',
    name: 'Review',
    component: () => import(/* webpackChunkName: "Review" */'../views/Review.vue'),
    meta: {
      auth: true,
    },
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/contact.vue'),
  },
  {
    path: '/rooms',
    name: 'Rooms',
    component: () => import(/* webpackChunkName: "rooms" */ '../views/Rooms.vue'),
  },
  {
    path: '/rooms/:id',
    name: 'Room',
    component: () => import(/* webpackChunkName: "room" */ '../views/Room.vue'),
    props: true,
  },
  {
    path: '/reservation',
    name: 'Reservation',
    component: () => import(/* webpackChunkName: "reservation" */ '../views/Reservation.vue'),
  },
  {
    path: '/room-service-requests',
    name: 'RoomServiceRequests',
    component: () => import(/* webpackChunckName: "room-service-requests") */ '../views/RoomServiceRequest.vue'),
    meta: {
      auth: true,
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

router.beforeEach((to, from, next) => {
  if (!store.state.token && to.meta.auth) { next('/login') } else next()
})

export default router
