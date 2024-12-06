import { Component, OnDestroy, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit, OnDestroy {
  cursos: any
  pagina: number = 1
  inscricao: Subscription = new Subscription

  constructor(
    private cursosService: CursosService,
    private activetRouter: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.cursos = this.cursosService.getCursos()

    this.inscricao = this.activetRouter.queryParamMap.subscribe(
      (queryParams: any) => {
        this.pagina = queryParams['pagina'] || 1
      }
    )

    console.log(this.inscricao)
  }

  ngOnDestroy() {
    this.inscricao?.unsubscribe()
  }

  proximaPagina() {
    // this.pagina++
    this.router.navigate(['/cursos'],
      {queryParams: {'pagina': ++this.pagina}}
    )

  }
}
