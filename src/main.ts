import { createApp } from 'vue';
import { router } from '@/routes/routes';
import { VueQueryPlugin } from '@tanstack/vue-query';
import App from '@/App.vue';

import '@/global.css';

const app = createApp(App);
app.use(router);
app.use(VueQueryPlugin);
app.mount('#app');
