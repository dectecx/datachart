import defaultRoutes from '@/routers/modules/defaultRoutes';
import { registerGuard } from '@/routers/registerGuard';
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

export interface CustomMeta {}

const routes: Array<RouteRecordRaw> = [...defaultRoutes];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

registerGuard(router);

export default router;
