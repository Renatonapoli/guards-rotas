import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';

export const loginGuards: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const router = inject(Router);
  const logado = !!localStorage.getItem('usuario');

  if (!logado) {
    router.navigate(['login']);
    return false;
  }
  return true;
};
