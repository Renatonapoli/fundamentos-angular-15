import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../login/auth-service.service";

export const CursosGuard: CanActivateChildFn = (
  childRote: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> | Promise<boolean> => {

  const authService = inject(AuthService)
  const router = inject(Router)

  if (authService.usuarioEstaAutenticado()) {
    console.log('Guarda de rota filha')
    return true

  }else {
    router.navigate(['/cursos'])
    return false
  }
}
