import App from '@/App.vue';
import { router } from '@/routes/routes';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import { createApp } from 'vue';

import '@/global.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, { unstyled: true });
app.use(VueQueryPlugin);
app.mount('#app');
