import Vue from "vue";
import VueRouter from "vue-router";
import Search from '@/components/Search.vue';
import About from '@/components/About.vue';
import TrackDetail from '@/components/TrackDetail.vue';

Vue.use(VueRouter);

const routes = [
  { 
    path: '/',
    component: Search,
    name: 'search'
  },
  { 
    path: '/about',
    component: About,
    name: 'about'
  },
  { 
    path: '/track/:id',
    component: TrackDetail,
    name: 'track'
  }
];


const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

// const routes = [
//   {
//     path: "/",
//     name: "Home",
//     component: Home,
//   },
//   {
//     path: "/about",
//     name: "About",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/About.vue"),
//   },
// ];