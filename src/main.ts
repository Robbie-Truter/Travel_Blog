import App from '@/App.vue';
import { router } from '@/routes/routes';
import Aura from '@primeuix/themes/aura';
import { VueQueryPlugin } from '@tanstack/vue-query';
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import Tooltip from 'primevue/tooltip';

import { createApp } from 'vue';

import '@/global.css';

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
  },
});
app.use(ToastService);
app.directive('tooltip', Tooltip);
app.use(VueQueryPlugin);
app.mount('#app');
