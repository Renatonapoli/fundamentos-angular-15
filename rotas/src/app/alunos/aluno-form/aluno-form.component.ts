import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy {
  aluno: any = {}
  inscricao: Subscription = new Subscription

  constructor(
    private route: ActivatedRoute,
    private AlunosService: AlunosService
  ) {}

  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        let id = params['id']

        this.aluno = this.AlunosService.getAluno(id)

        if(this.aluno === null) {
          this.aluno = {}
        }
      }
    )
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
