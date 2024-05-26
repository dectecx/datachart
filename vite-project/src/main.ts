import router from '@/routers/router';
import { piniaInstance } from '@/stores/pinia';
import { createApp } from 'vue';
import App from './App.vue';
import './style.css';

const app = createApp(App);
app.use(piniaInstance);
app.use(router);

router.isReady().then(() => {
  // Waiting for the router to be ready prevents race conditions when returning from a loginRedirect or acquireTokenRedirect
  app.mount('#app');
});
