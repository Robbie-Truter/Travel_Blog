import App from '@/App.vue';
import { router } from '@/routes/routes';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import { createApp } from 'vue';

import '@/global.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  }
});
app.use(VueQueryPlugin);
app.mount('#app');
