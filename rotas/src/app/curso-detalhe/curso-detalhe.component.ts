import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: string = ''

  inscricao: Subscription | undefined

  constructor(private idRouter: ActivatedRoute) {
   this.id = this.idRouter.snapshot.params['id']
   console.log(idRouter)
  }

  ngOnInit() {
    this.inscricao = this.idRouter.params.subscribe(params => {
      this.id = params['id']
    })
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe()
  }
}
