import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Aluno } from "../aluno";
import { Observable } from "rxjs";
import { AlunosService } from "../alunos.service";

export const AlunoDetalheResolve: ResolveFn<Aluno> = (

  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Observable<Aluno> | Promise<Aluno> | Aluno => {
  const alunosService = inject(AlunosService)

  let id = +route.params['id']

  return alunosService.getAluno(id)!

}
