import { CustomMeta } from '@/routers/router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw & { meta?: CustomMeta }> = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Error',
    name: 'Error',
    components: {
      default: () => import('@/views/error/error.vue'),
    },
  },
  { path: '/:catchAll(.*)', redirect: '/' },
];
export default routes;
