import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';
import { Curso } from '../curso';
import { catchError, EMPTY, Observable, Subject, empty } from 'rxjs';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { AlertModalComponent } from 'src/app/shared/alert-modal/alert-modal.component';
import { AlertModalService } from 'src/app/shared/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.scss'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {
  cursos!: Curso[]
  bsModalRef!: BsModalRef;

  cursos$!: Observable<Curso[]>
  error$ = new Subject<boolean>()

  constructor(
    private cursoService: CursosService,
    // private modalService: BsModalService
    private alertService: AlertModalService
  ) {}

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
      catchError(error => {
        console.log(error)
        this.handleError()
        return EMPTY
      })
    )
    .subscribe(
      dados => {
        console.log(dados)
      }
      // error => console.error(error),
      // () => console.log('Observable completo')
    )
  }

  handleError() {
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.')
    // this.bsModalRef = this.modalService.show(AlertModalComponent);
    // this.bsModalRef.content.type = 'danger';
    // this.bsModalRef.content.message = ' Erro ao carregar cursos. Tente novamente mais tarde.';
  }
}
