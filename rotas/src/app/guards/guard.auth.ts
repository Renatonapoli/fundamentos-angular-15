import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../login/auth-service.service';


export const GuardAuth: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> => {
  const authService = inject(AuthService)
  const router = inject(Router)

  if(authService.usuarioEstaAutenticado()) {
    console.log('AuthGards')
    return true
  }else{
    router.navigate(['/login'])
    return false
  }
}
