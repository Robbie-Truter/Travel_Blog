import AboutMe from '@/pages/AboutMe.vue';
import BlogPostList from '@/pages/blog_posts/BlogPostList.vue';
import BlogPostView from '@/pages/blog_posts/BlogPostView.vue';
import HomePage from '@/pages/home_page/HomePage.vue';
import NotFound from '@/pages/NotFound.vue';
import { createRouter, createWebHistory } from 'vue-router';

//Page routes
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: HomePage },
  { path: '/about-us', component: AboutMe },
  { path: '/blogs', component: BlogPostList },
  { path: '/blogs/:slug', component: BlogPostView },
  { path: '/:catchAll(.*)', component: NotFound },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 });
      }, 200);
    });
  },
});
