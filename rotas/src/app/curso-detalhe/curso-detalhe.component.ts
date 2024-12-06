import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CursosService } from '../cursos/cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit {
  id: number
  inscricao: Subscription | undefined
  curso: any

  constructor(
    private idRouter: ActivatedRoute,
    private cursoService: CursosService,
    private router: Router
  ) {
   this.id = this.idRouter.snapshot.params['id']
   console.log(idRouter)
  }

  ngOnInit() {
    this.inscricao = this.idRouter.params.subscribe(params => {
      this.id = params['id']
      this.curso = this.cursoService.getCurso(this.id)

      if(this.curso == null) {
        this.router.navigate(['/naoEncontrado'])
      }
    })
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe()
  }
}
