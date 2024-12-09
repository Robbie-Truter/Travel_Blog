import { createRouter, createWebHistory } from "vue-router";
import Home from "../../src/components/Home.vue";
import AboutMe from "../../src/components/AboutMe.vue";
import NotFound from "../../src/components/NotFound.vue";

const routes = [
  { path: "/", redirect: "/home" },
  { path: "/home", component: Home },
  { path: "/aboutMe", component: AboutMe },
  { path: "/:catchAll(.*)", component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
