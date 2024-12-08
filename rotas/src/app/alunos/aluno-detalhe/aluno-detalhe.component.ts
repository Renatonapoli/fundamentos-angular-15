import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Aluno } from '../aluno';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {
  aluno!: Aluno
  inscricao!: Subscription

  constructor(
    private activeRoute: ActivatedRoute,
    private alunosService: AlunosService,
    private router: Router,
  ) {}

  ngOnInit() {
    // this.inscricao = this.activeRoute.params.subscribe(
    // (params: any) => {
    //   let id = params['id'];

    //   this.aluno = this.alunosService.getAluno(id)
    // }
    // )
    console.log('ngOnInit: AlunoDetalhesComponent')

    this.inscricao = this.activeRoute.data.subscribe(
      (data) => {
        console.log("Recebendo o objeto aluno do resolver")
        this.aluno = data['aluno'];
      }
    );
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar'])
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
