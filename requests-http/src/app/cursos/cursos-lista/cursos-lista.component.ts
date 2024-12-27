import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { catchError, EMPTY, Observable, Subject, empty } from 'rxjs';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[]

  cursos$!: Observable<Curso[]>
  error$ = new Subject<boolean>()

  constructor(private cursoService: CursosService) {}

  ngOnInit() {
    // this.cursoService.list().subscribe(dados => this.cursos = dados)
    this.onRefresh()
  }

  onRefresh() {
    this.cursos$  = this.cursoService.list()
    .pipe(
      catchError(error => {
        console.log(error)
        this.error$.next(true)
        return EMPTY
      })
    )

    this.cursoService.list()
    .pipe(
      catchError(error => EMPTY)

      // error => console.error(error),
      // () => console.log('Observable completo')
    )
    .subscribe(
      dados => {
        console.log(dados)
      }
    )
  }
}
