import { RouteLocationNormalized, Router } from 'vue-router';

export function registerGuard(router: Router) {
  router.beforeEach(async (to: RouteLocationNormalized, from: RouteLocationNormalized) => {
    return true;
  });

  router.beforeResolve((to, from, next) => {
    next();
  });

  router.afterEach((to, from, failure) => {
    return;
  });
}
