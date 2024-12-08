import { AlunosService } from './../alunos.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormCanDeActivate } from 'src/app/guards/formCanDeActivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, OnDestroy, FormCanDeActivate {
  aluno: any = {}
  inscricao: Subscription = new Subscription

  private formMudou: boolean = false

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

  onInput() {
    this.formMudou = true
    console.log('mudou')
  }

  podeMudarRota() {
    if(this.formMudou) {
      confirm('Tem certeza que deseja sair desta página?')
    }

    return true
  }

  podeDesativar() {
    return this.podeMudarRota()
  }

  ngOnDestroy() {
    this.inscricao.unsubscribe()
  }
}
