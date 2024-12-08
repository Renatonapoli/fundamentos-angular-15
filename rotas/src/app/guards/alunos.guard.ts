import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "../login/auth-service.service";

export const AlunosGuard: CanActivateChildFn = (
  childRote: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): boolean | Observable<boolean> | Promise<boolean> => {

  const authService = inject(AuthService)
  const router = inject(Router)

  console.log('AlunosGuard: Rotas filhas')

  if (authService.usuarioEstaAutenticado()) {
    // console.log(childRote)
    // console.log(state)

    if(state.url.includes('editar')) {
      // alert('Você não possui autorização')
      // return false
    }

    return true

  }else {
    router.navigate(['/alunos'])
    return false
  }

}
