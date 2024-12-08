import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { AlunoFormComponent } from "../alunos/aluno-form/aluno-form.component";
import { Observable } from "rxjs";

export const AlunosDeActivateGurad: CanDeactivateFn<AlunoFormComponent> = (
  component: AlunoFormComponent,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {

  console.log('canDeActivate')


  return component.podeMudarRota()


  }
