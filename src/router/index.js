import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue';
const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/projects",
    name: "projecs",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/home",
    name: "home",
    component: () => import("../views/Home.vue"),
  },

];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;














