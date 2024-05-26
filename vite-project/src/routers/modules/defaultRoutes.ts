import { RouterName } from '@/common/enums/routerName';
import { CustomMeta } from '@/routers/router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw & { meta?: CustomMeta }> = [
  {
    path: '/',
    redirect: { name: RouterName.HOME },
  },
  {
    path: '/Home',
    name: RouterName.HOME,
    components: {
      default: () => import('@/views/home/home.vue'),
    },
  },
  {
    path: '/Error',
    name: RouterName.ERROR,
    components: {
      default: () => import('@/views/error/error.vue'),
    },
  },
  { path: '/:catchAll(.*)', redirect: '/' },
];
export default routes;
