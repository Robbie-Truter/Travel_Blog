import { createApp } from 'vue';
import { router } from '@/routes/routes';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/App.vue';
import animateOnScroll from '@/directives/animateOnScroll';
import '@/global.css';

const app = createApp(App);
app.directive('animate-on-scroll', animateOnScroll);
app.use(router);
app.use(VueQueryPlugin);
app.mount('#app');
