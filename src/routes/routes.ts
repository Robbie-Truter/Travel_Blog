import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/home_page/HomePage.vue';
import AboutMe from '@/pages/AboutMe.vue';
import BlogPosts from '@/pages/blog_posts/BlogPosts.vue';
import NotFound from '@/pages/NotFound.vue';

//Page routes
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/about-us', component: AboutMe },
  { path: '/blogs', component: BlogPosts },
  { path: '/:catchAll(.*)', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
