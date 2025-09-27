import { createApp } from 'vue';
import { router } from '@/routes/routes';
// @ts-expect-error ts thinks this is not a module for some reason
import App from './App.vue';
import './global.css';

const app = createApp(App);
app.use(router);
app.mount('#app');
