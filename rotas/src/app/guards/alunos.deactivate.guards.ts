import { ActivatedRouteSnapshot, CanDeactivateFn, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { FormCanDeActivate } from "./formCanDeActivate";

export const AlunosDeActivateGurad: CanDeactivateFn<FormCanDeActivate> = (
  component: FormCanDeActivate,
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<boolean> | Promise<boolean> | boolean => {

  console.log('canDeActivate')


  return component.podeDesativar()


  }
