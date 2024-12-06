import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno: any
  inscricao: Subscription = new Subscription

  constructor(
    private activeRoute: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router
  ) {}

  ngOnInit() {
    this.inscricao = this.activeRoute.params.subscribe(
    (params: any) => {
      let id = params['id'];

      this.aluno = this.alunosService.getAluno(id)
    }
    )
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
