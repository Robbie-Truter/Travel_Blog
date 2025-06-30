import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import AboutMe from "@/pages/AboutMe.vue";
import NotFound from "@/pages/NotFound.vue";

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
